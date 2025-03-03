import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function GET() {
  const url = "https://golcarreiras.gupy.io/";

  const browser =
    process.env.NODE_ENV === "production"
      ? await puppeteer.launch({
          headless: true,
          defaultViewport: null,
          executablePath: "/usr/bin/google-chrome",
          args: ["--no-sandbox"],
        })
      : await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  // Aguarda o carregamento da lista de vagas
  await page.waitForSelector('ul[data-testid="job-list__list"] > li', {
    timeout: 15000,
  });

  const vagas: {
    titulo: string;
    localizacao: string;
    tipo: string;
    link: string | null;
  }[] = [];

  let hasNextPage = true;
  let lastJobCount = 0; // Variável para comparar a quantidade de vagas coletadas

  while (hasNextPage) {
    const html = await page.content();
    const $ = cheerio.load(html);

    // Coleta as vagas da página atual
    const currentJobCount = $('ul[data-testid="job-list__list"] > li').length;

    if (currentJobCount > 0) {
      $('ul[data-testid="job-list__list"] > li').each((index, element) => {
        const titulo = $(element).find("div.sc-d1f2599d-2").text().trim();
        const localizacao = $(element).find("div.sc-d1f2599d-3").text().trim();
        const tipo = $(element).find("div.sc-d1f2599d-4").text().trim();
        const link = $(element).find("a").attr("href");

        vagas.push({
          titulo,
          localizacao,
          tipo,
          link: link ? `https://golcarreiras.gupy.io${link}` : null,
        });
      });
    }

    // Verifica se há uma próxima página
    const nextPageButton = await page.$(
      'button[data-testid="pagination-next-button"]'
    );

    if (
      nextPageButton &&
      !(await nextPageButton.evaluate(
        (el) =>
          el.hasAttribute("aria-disabled") &&
          el.getAttribute("aria-disabled") === "true"
      ))
    ) {
      await nextPageButton.click();
      await sleep(2000); // Aguarda o carregamento da nova página

      // Verifica se a quantidade de vagas aumentou
      const newHtml = await page.content();
      const new$ = cheerio.load(newHtml);
      const newJobCount = new$('ul[data-testid="job-list__list"] > li').length;

      if (newJobCount === lastJobCount) {
        hasNextPage = false; // Se a quantidade de vagas não mudar, pare o loop
      } else {
        lastJobCount = newJobCount; // Atualiza a contagem de vagas
      }
    } else {
      hasNextPage = false; // Não há mais páginas ou o botão está desativado
    }
  }

  await browser.close();
  return NextResponse.json(vagas);
}
