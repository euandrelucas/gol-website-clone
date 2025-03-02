import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import { NextRequest, NextResponse } from "next/server";
import { writeFileSync } from "fs";

// URL BASE:     "https://b2c.voegol.com.br/compra/busca-parceiros?pv=br&tipo=DF&de=NAT&para=RIO&ida=09-07-2025&volta=16-07-2025&ADT=1&ADL=0&CHD=0&INF=0&voebiz=0";

export async function POST(req: NextRequest) {
  const { origem, destino, ida, volta } = await req.json();
  const url = `https://b2c.voegol.com.br/compra/busca-parceiros?pv=br&tipo=DF&de=${origem}&para=${destino}&ida=${ida}&volta=${volta}&ADT=1&ADL=0&CHD=0&INF=0&voebiz=0`;

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  await page.waitForSelector(".p-select-flight__accordion", { timeout: 30000 });

  const html = await page.content();
  writeFileSync("page.html", html);

  const $ = cheerio.load(html);
  const voos: unknown[] = [];

  $(".p-select-flight__accordion").each((index, element) => {
    const origem = $(element).find("[id^='lbl_origin']").text().trim();
    const destino = $(element).find("[id^='lbl_destination']").text().trim();
    const duracao = $(element).find("[id^='lbl_duration']").text().trim();
    const operadoPor = $(element).find("[id^='lbl_operationBy']").text().trim();
    const preco = $(element).find("[id^='lbl_priceValue']").text().trim();

    voos.push({ origem, destino, duracao, operadoPor, preco });
  });

  await browser.close();
  return NextResponse.json(voos);
}
