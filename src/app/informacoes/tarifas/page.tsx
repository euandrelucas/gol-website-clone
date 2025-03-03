import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Info, AlertTriangle } from "lucide-react";

export default function Tarifas() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Passageiros em aeroporto"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#FF7020]/90 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <Link
              href="/informacoes"
              className="inline-flex items-center text-white mb-6 hover:opacity-80"
            >
              <ArrowLeft className="mr-2" />
              Voltar para Informações
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">Tarifas</h1>
            <p className="text-xl text-white max-w-2xl">
              A GOL possui diversas tarifas. Conheça os benefícios e escolha a
              ideal para você.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introdução */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#FF7020]">
              Encontre a tarifa ideal para a sua viagem
            </h2>
            <p className="text-lg text-gray-700">
              As tarifas da GOL foram pensadas para cada ocasião. Escolha aquela
              que melhor se encaixa na sua viagem.
            </p>
          </CardContent>
        </Card>

        {/* Tarifas Nacionais */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Confira os atributos das tarifas nacionais
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">
                    Clientes GOL
                    <br />
                    (não cadastrados no programa Smiles)
                  </th>
                  <th className="border p-3 text-center bg-[#FF7020]/10">
                    MAX
                  </th>
                  <th className="border p-3 text-center">PLUS</th>
                  <th className="border p-3 text-center">LIGHT</th>
                  <th className="border p-3 text-center">PROMO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Bagagem despachada</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    1ª e 2ª bagagens gratuitas
                  </td>
                  <td className="border p-3 text-center">
                    1ª bagagem gratuita
                  </td>
                  <td className="border p-3 text-center">
                    Sem bagagem gratuita
                  </td>
                  <td className="border p-3 text-center">
                    Sem bagagem gratuita
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Marcação de assento<sup>1</sup>
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Gratuita
                  </td>
                  <td className="border p-3 text-center">Gratuita</td>
                  <td className="border p-3 text-center">
                    Custo adicional<sup>1</sup>
                  </td>
                  <td className="border p-3 text-center">
                    Custo adicional<sup>1</sup>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">GOL Premium Lounge</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Balcão do Lounge: R$ 184,00
                    <br />
                    Canais digitais: R$ 154,00
                  </td>
                  <td className="border p-3 text-center">
                    Balcão do Lounge: R$ 184,00
                    <br />
                    Canais digitais: R$ 154,00
                  </td>
                  <td className="border p-3 text-center">
                    Balcão do Lounge: R$ 184,00
                    <br />
                    Canais digitais: R$ 154,00
                  </td>
                  <td className="border p-3 text-center">
                    Balcão do Lounge: R$ 184,00
                    <br />
                    Canais digitais: R$ 154,00
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Assento GOL + Conforto
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Gratuito
                  </td>
                  <td className="border p-3 text-center">Custo adicional</td>
                  <td className="border p-3 text-center">Custo adicional</td>
                  <td className="border p-3 text-center">Custo adicional</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Antecipação de voo<sup>2</sup>
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Gratuita para qualquer horário no mesmo dia do voo original
                  </td>
                  <td className="border p-3 text-center">
                    Gratuita. Permitida até 6 horas do voo original
                  </td>
                  <td className="border p-3 text-center">
                    Custo de R$ 100,00. Permitida até 6 horas do voo original
                  </td>
                  <td className="border p-3 text-center">Não permitida</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Snack gratuito<sup>4</sup>
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Snack gratuito
                  </td>
                  <td className="border p-3 text-center">Snack gratuito</td>
                  <td className="border p-3 text-center">Snack gratuito</td>
                  <td className="border p-3 text-center">Snack gratuito</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Alteração/ Cancelamento
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Isento
                  </td>
                  <td className="border p-3 text-center">
                    R$370 ou 100% da tarifa (o que for menor)
                  </td>
                  <td className="border p-3 text-center">
                    R$400 ou 100% da tarifa (o que for menor)
                  </td>
                  <td className="border p-3 text-center">100% da tarifa</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Reembolso</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    95% do valor residual em reais
                  </td>
                  <td className="border p-3 text-center">
                    40% do valor residual em reais
                  </td>
                  <td className="border p-3 text-center">
                    Valor em reais não reembolsável
                  </td>
                  <td className="border p-3 text-center">
                    Valor em reais não reembolsável
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Prioridade de check-in, embarque e retirada de bagagem
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Possui
                  </td>
                  <td className="border p-3 text-center">—</td>
                  <td className="border p-3 text-center">—</td>
                  <td className="border p-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">No show</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Isento
                  </td>
                  <td className="border p-3 text-center">
                    R$470 ou 100% da tarifa (o que for menor)
                  </td>
                  <td className="border p-3 text-center">
                    R$500 ou 100% da tarifa (o que for menor)
                  </td>
                  <td className="border p-3 text-center">100% da tarifa</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border p-3 font-medium">Categoria VoeBiz</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Super Prime
                  </td>
                  <td className="border p-3 text-center">Prime</td>
                  <td className="border p-3 text-center">Essencial</td>
                  <td className="border p-3 text-center">Essencial</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Pontos VoeBiz<sup>3</sup>
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    10% do valor da passagem aérea convertida em pontos
                  </td>
                  <td className="border p-3 text-center">
                    8% do valor da passagem aérea convertida em pontos
                  </td>
                  <td className="border p-3 text-center">
                    5% do valor da passagem aérea convertida em pontos
                  </td>
                  <td className="border p-3 text-center">
                    3% do valor da passagem aérea convertida em pontos
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-sm text-gray-600 space-y-2 mb-8">
            <p>
              <sup>1</sup>A marcação de assento será permitida e gratuita dentro
              do período de check-in (de 48 horas a 1 hora antes do voo).
            </p>
            <p>
              <sup>2</sup>Sujeito a disponibilidade. Limitado a uma antecipação
              por bilhete.
            </p>
            <p>
              <sup>3</sup>Programa de Fidelidade para pequenas e médias
              Empresas.
            </p>
            <p>
              <sup>4</sup>Apenas para voos acima de 1h, exceto ponte aérea.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <p>
              Verifique os valores e regras de cancelamento, alteração,
              reembolso e no-show correspondentes a cada tarifa, para voos
              nacionais e internacionais, em:{" "}
              <Link
                href="/informacoes/alterar-voo"
                className="text-[#FF7020] hover:underline"
              >
                Alterar voo | GOL Linhas Aéreas (voegol.com.br)
              </Link>
            </p>
          </div>

          <div className="space-y-2">
            <p>
              Crianças de 2 a 12 anos incompletos pagam o mesmo valor da tarifa
              de um adulto.
            </p>
            <p>
              Bebês de colo, de 0 a 2 anos incompletos, não pagam pela passagem
              aérea. Viajam gratuitamente no colo do adulto responsável.
              Verifique mais informações sobre embarque de crianças em{" "}
              <Link
                href="https://www.voegol.com.br/informacoes/informacoes-para-viagens-com-bebes-e-menores-de-idade"
                className="text-[#FF7020] hover:underline"
              >
                https://www.voegol.com.br/informacoes/informacoes-para-viagens-com-bebes-e-menores-de-idade
              </Link>
            </p>
          </div>

          <div className="mt-6">
            <Link href="#" className="text-[#FF7020] hover:underline">
              Para conferir as regras tarifárias de passagens adquiridas antes
              de 15/09/2022, acesse aqui
            </Link>
          </div>
        </section>

        {/* Tarifas Internacionais */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Confira os atributos das tarifas internacionais
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">
                    Clientes GOL
                    <br />
                    (não cadastrados no programa Smiles)
                  </th>
                  <th className="border p-3 text-center bg-[#FF7020]/10">
                    PREMIUM ECONOMY
                  </th>
                  <th className="border p-3 text-center">PLUS</th>
                  <th className="border p-3 text-center">LIGHT</th>
                  <th className="border p-3 text-center">PROMO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Bagagem despachada</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    1ª e 2ª bagagens gratuitas
                  </td>
                  <td className="border p-3 text-center">
                    1ª bagagem gratuita
                  </td>
                  <td className="border p-3 text-center">
                    Sem bagagem gratuita
                  </td>
                  <td className="border p-3 text-center">
                    Sem bagagem gratuita
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Marcação de assento<sup>1</sup>
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Gratuita
                  </td>
                  <td className="border p-3 text-center">
                    Gratuita<sup>3</sup>
                  </td>
                  <td className="border p-3 text-center">
                    Custo adicional<sup>1</sup>
                  </td>
                  <td className="border p-3 text-center">
                    Custo adicional<sup>1</sup>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">GOL Premium Lounge</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Gratuito
                  </td>
                  <td className="border p-3 text-center">
                    Balcão do Lounge: R$ 220,00
                    <br />
                    Canais digitais: R$ 190,00
                  </td>
                  <td className="border p-3 text-center">
                    Balcão do Lounge: R$ 220,00
                    <br />
                    Canais digitais: R$ 190,00
                  </td>
                  <td className="border p-3 text-center">
                    Balcão do Lounge: R$ 220,00
                    <br />
                    Canais digitais: R$ 190,00
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Antecipação de voo<sup>2</sup>
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Gratuita para qualquer horário no mesmo dia do voo original
                  </td>
                  <td className="border p-3 text-center">
                    Gratuita. Permitida até 6 horas do voo original
                  </td>
                  <td className="border p-3 text-center">
                    Custo de R$ 100,00. Permitida até 6 horas do voo original
                  </td>
                  <td className="border p-3 text-center">Não permitida</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Snack gratuito</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Serviço de bordo diferenciado com opções quentes e variedade
                    de bebidas não alcoólicas, que variam conforme o voo.
                  </td>
                  <td className="border p-3 text-center">Possui</td>
                  <td className="border p-3 text-center">Possui</td>
                  <td className="border p-3 text-center">Possui</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Alteração/ Cancelamento
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Isento
                  </td>
                  <td className="border p-3 text-center">
                    U$150 ou 100% da tarifa (o que for menor)
                    <br />
                    <br />
                    EUA/PUJ/CUN/SJO/AUA: U$280 ou 100% da tarifa)
                  </td>
                  <td className="border p-3 text-center">
                    U$180 ou 100% da tarifa (o que for menor)
                    <br />
                    <br />
                    EUA/PUJ/CUN/SJO/AUA: U$310 ou 100% da tarifa
                  </td>
                  <td className="border p-3 text-center">100% da tarifa</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Reembolso</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    95% do valor residual em reais
                  </td>
                  <td className="border p-3 text-center">
                    40% do valor residual em reais
                  </td>
                  <td className="border p-3 text-center">Não reembolsável</td>
                  <td className="border p-3 text-center">Não reembolsável</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Prioridade de check-in, embarque e retirada de bagagem
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Possui
                  </td>
                  <td className="border p-3 text-center">—</td>
                  <td className="border p-3 text-center">—</td>
                  <td className="border p-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">No show</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Isento
                  </td>
                  <td className="border p-3 text-center">
                    U$200 ou 100% da tarifa (o que for menor)
                    <br />
                    <br />
                    EUA/PUJ/CUN/SJO/AUA: U$330 ou 100% da tarifa
                  </td>
                  <td className="border p-3 text-center">
                    U$230 ou 100% da tarifa (o que for menor)
                    <br />
                    <br />
                    EUA/PUJ/CUN/SJO/AUA: U$360 ou 100% da tarifa
                  </td>
                  <td className="border p-3 text-center">100% da tarifa</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border p-3 font-medium">Categoria VoeBiz</td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    Super Prime
                  </td>
                  <td className="border p-3 text-center">Prime</td>
                  <td className="border p-3 text-center">Essencial</td>
                  <td className="border p-3 text-center">Essencial</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Pontos VoeBiz<sup>4</sup>
                  </td>
                  <td className="border p-3 text-center bg-[#FF7020]/10">
                    10% do valor da passagem aérea convertida em pontos
                  </td>
                  <td className="border p-3 text-center">
                    8% do valor da passagem aérea convertida em pontos
                  </td>
                  <td className="border p-3 text-center">
                    5% do valor da passagem aérea convertida em pontos
                  </td>
                  <td className="border p-3 text-center">
                    3% do valor da passagem aérea convertida em pontos
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-sm text-gray-600 space-y-2 mb-8">
            <p>
              <sup>1</sup>A marcação de assento será permitida e gratuita dentro
              do período de check-in (de 48 horas a 01 hora antes do voo). Para
              voos com destino aos Estados Unidos operados pela GOL, a marcação
              de assento será permitida e gratuita dentro do período de check-in
              (de 24 horas a 1 hora antes do voo).
            </p>
            <p>
              <sup>2</sup>Sujeito a disponibilidade. Limitado a uma antecipação
              por bilhete.
            </p>
            <p>
              <sup>3</sup>Apenas para o assento padrão.
            </p>
            <p>
              <sup>4</sup>Programa de Fidelidade para pequenas e médias
              Empresas.
            </p>
            <p>
              * Valores em dólar serão convertidos para moeda de compra, de
              acordo com a cotação do dólar do dia.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <p>
              Verifique os valores e regras de cancelamento, alteração,
              reembolso e no-show correspondentes a cada tarifa, para voos
              nacionais e internacionais, em:{" "}
              <Link
                href="/informacoes/alterar-voo"
                className="text-[#FF7020] hover:underline"
              >
                Alterar voo | GOL Linhas Aéreas (voegol.com.br)
              </Link>
            </p>
          </div>

          <div className="space-y-2">
            <p>
              Crianças de 2 a 12 anos incompletos pagam o mesmo valor da tarifa
              de um adulto.
            </p>
            <p>
              Bebês de colo, de 0 a 2 anos incompletos, pagam 10% da tarifa de
              um adulto pela passagem aérea e viajam no colo do adulto
              responsável. Verifique mais detalhes sobre embarque de bebês em{" "}
              <Link
                href="https://www.voegol.com.br/informacoes/informacoes-para-viagens-com-bebes-e-menores-de-idade"
                className="text-[#FF7020] hover:underline"
              >
                https://www.voegol.com.br/informacoes/informacoes-para-viagens-com-bebes-e-menores-de-idade
              </Link>
            </p>
            <p>
              Clientes que adquirirem passagens a partir de 23/01/2025 terão as
              novas regras de alteração/cancelamento e no show para voos com
              destino e origem a SJO e AUA
            </p>
          </div>

          <div className="mt-6">
            <Link href="#" className="text-[#FF7020] hover:underline">
              Para saber informações sobre reembolso, remarcação e cancelamento
              de voos, clique aqui.
            </Link>
          </div>
        </section>

        {/* Comparativo de Tarifas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Comparativo de Tarifas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "MAX / PREMIUM ECONOMY",
                description:
                  "Ideal para quem busca máxima flexibilidade e conforto",
                features: [
                  "Bagagem gratuita (2 volumes)",
                  "Marcação de assento gratuita",
                  "Assento GOL+ Conforto gratuito",
                  "Alteração e cancelamento sem custo",
                  "Prioridade no check-in e embarque",
                  "Reembolso de 95% do valor residual",
                ],
                highlight: true,
              },
              {
                title: "PLUS",
                description: "Equilíbrio entre custo e benefício",
                features: [
                  "Bagagem gratuita (1 volume)",
                  "Marcação de assento gratuita",
                  "Antecipação de voo gratuita (até 6h)",
                  "Alteração com taxa reduzida",
                  "Reembolso de 40% do valor residual",
                ],
                highlight: false,
              },
              {
                title: "LIGHT",
                description: "Opção econômica com alguns benefícios",
                features: [
                  "Sem bagagem gratuita",
                  "Marcação de assento com custo adicional",
                  "Antecipação de voo com taxa",
                  "Alteração com taxa",
                  "Não reembolsável",
                ],
                highlight: false,
              },
              {
                title: "PROMO",
                description: "A opção mais econômica para viagens simples",
                features: [
                  "Sem bagagem gratuita",
                  "Marcação de assento com custo adicional",
                  "Sem possibilidade de antecipação",
                  "Alteração com 100% da tarifa",
                  "Não reembolsável",
                ],
                highlight: false,
              },
            ].map((tarifa, index) => (
              <Card
                key={index}
                className={`${
                  tarifa.highlight
                    ? "border-[#FF7020] shadow-lg"
                    : "border-gray-200"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                <CardHeader
                  className={`${
                    tarifa.highlight ? "bg-[#FF7020] text-white" : "bg-gray-100"
                  }`}
                >
                  <CardTitle className="text-xl font-bold text-center">
                    {tarifa.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-center mb-6 text-gray-600">
                    {tarifa.description}
                  </p>
                  <ul className="space-y-3">
                    {tarifa.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check
                          className={`h-5 w-5 ${
                            tarifa.highlight
                              ? "text-[#FF7020]"
                              : "text-green-500"
                          } flex-shrink-0 mt-1`}
                        />
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Informações Adicionais */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Info className="h-6 w-6 text-[#FF7020]" />
              <CardTitle className="text-xl font-bold">
                Informações Importantes
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                <p>
                  <span className="font-bold">No-show:</span> O não
                  comparecimento ao embarque sem cancelamento prévio pode
                  resultar em cobrança de taxas adicionais e perda do valor da
                  passagem.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                <p>
                  <span className="font-bold">Alterações de tarifa:</span> Em
                  caso de alteração de voo, além da taxa de alteração, pode
                  haver cobrança de diferença tarifária se o novo voo tiver
                  tarifa superior.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                <p>
                  <span className="font-bold">Bagagem:</span> Excesso de bagagem
                  ou bagagens com dimensões acima do permitido estão sujeitos a
                  cobranças adicionais. Verifique as regras antes de viajar.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-[#FF7020] text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para escolher sua tarifa?
            </h2>
            <p className="text-lg mb-6">
              Encontre a opção ideal para sua próxima viagem com a GOL.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#FF7020] hover:bg-gray-100"
            >
              Buscar Voos
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
