import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  RefreshCw,
  AlertTriangle,
  Calendar,
  DollarSign,
  Info,
} from "lucide-react";

export default function AlterarVoo() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Passageiro alterando voo"
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
            <h1 className="text-5xl font-bold text-white mb-4">Alterar Voo</h1>
            <p className="text-xl text-white max-w-2xl">
              Deseja modificar seu voo? Conheça as regras de cancelamento,
              reembolso e remarcação.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introdução */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#FF7020]">
              Alterar voo
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Precisa adiar o seu voo ou ter mais flexibilidade de datas? Quer
              saber quais são as taxas de cancelamento? Aqui você pode conhecer
              cada uma das tarifas GOL e escolher aquela que é ideal para a sua
              viagem. Confira a tabela e verifique os valores de cancelamento,
              alteração, reembolso e no-show correspondentes a cada tarifa, para
              voos nacionais e internacionais.
            </p>
          </CardContent>
        </Card>

        {/* Regras Atuais */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#FF7020]">
              Regras atuais
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-6">
              Conheça cada uma das tarifas GOL e veja qual é a melhor para sua
              viagem. Na tabela abaixo você pode verificar as taxas e os valores
              de reembolso correspondentes a cada tarifa. Os valores mencionados
              abaixo são válidos apenas para voos operados puramente pela GOL.
              Os custos de alteração, cancelamento e no-show são cobrados por
              trecho e por passageiro.
            </p>
            <p className="mb-6">
              Para saber os custos de voos de parceiras{" "}
              <Link href="#" className="text-[#FF7020] hover:underline">
                clique aqui
              </Link>
              .
            </p>

            {/* Regras Nacionais */}
            <h3 className="text-xl font-bold mb-4">Veja as regras nacionais</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left"></th>
                    <th className="border p-3 text-center">MAX</th>
                    <th className="border p-3 text-center">PLUS</th>
                    <th className="border p-3 text-center">LIGHT</th>
                    <th className="border p-3 text-center">PROMO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">
                      Custo para alteração
                      <br />
                      ou cancelamento ¹
                    </td>
                    <td className="border p-3 text-center">Isento</td>
                    <td className="border p-3 text-center">
                      R$370 ou 100% da tarifa
                      <br />
                      (o que for menor)
                    </td>
                    <td className="border p-3 text-center">
                      R$400 ou 100% da tarifa
                      <br />
                      (o que for menor)
                    </td>
                    <td className="border p-3 text-center">100% da tarifa</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">
                      Valor reembolsável
                    </td>
                    <td className="border p-3 text-center">
                      95% do valor residual em reais
                    </td>
                    <td className="border p-3 text-center">
                      40% do valor residual em reais
                    </td>
                    <td className="border p-3 text-center">Não reembolsável</td>
                    <td className="border p-3 text-center">Não reembolsável</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">No-show</td>
                    <td className="border p-3 text-center">Isento</td>
                    <td className="border p-3 text-center">
                      R$470 ou 100% da tarifa
                      <br />
                      (o que for menor)
                    </td>
                    <td className="border p-3 text-center">
                      R$500 ou 100% da tarifa
                      <br />
                      (o que for menor)
                    </td>
                    <td className="border p-3 text-center">Não reembolsável</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-sm text-gray-600 mb-8">
              <p>
                ¹No caso de alteração, se houver diferença de preço entre o voo
                original e o novo voo, o valor será cobrado.
              </p>
              <p>
                Os valores mencionados acima são válidos apenas para voos
                operados puramente pela GOL.
              </p>
              <p>
                Os custos de alteração, cancelamento e no-show são cobrados por
                trecho e por passageiro.
              </p>
              <p>
                Crianças de 2 a 12 anos incompletos pagam o mesmo valor da
                tarifa de um adulto.
              </p>
              <p>
                Bebês de colo, de 0 a 2 anos incompletos, não pagam pela
                passagem aérea. Viajam gratuitamente no colo do adulto
                responsável. Verifique mais informações sobre embarque de bebês
                em{" "}
                <Link
                  href="https://www.voegol.com.br/informacoes/informacoes-para-viagens-com-bebes-e-menores-de-idade"
                  className="text-[#FF7020] hover:underline"
                >
                  https://www.voegol.com.br/informacoes/informacoes-para-viagens-com-bebes-e-menores-de-idade
                </Link>
                .
              </p>
            </div>

            {/* Regras Internacionais */}
            <h3 className="text-xl font-bold mb-4">
              Veja as regras internacionais
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left"></th>
                    <th className="border p-3 text-center">PREMIUM ECONOMY</th>
                    <th className="border p-3 text-center">PLUS</th>
                    <th className="border p-3 text-center">LIGHT</th>
                    <th className="border p-3 text-center">PROMO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">
                      Custo para alteração
                      <br />
                      ou cancelamento¹
                    </td>
                    <td className="border p-3 text-center">Isento</td>
                    <td className="border p-3 text-center">
                      U$150 ou 100% da tarifa
                      <br />
                      (o que for menor)
                      <br />
                      <br />
                      EUA/PUJ/CUN/SJO/AUA:
                      <br />
                      U$280 ou 100% de tarifa)
                    </td>
                    <td className="border p-3 text-center">
                      U$180 ou 100% da tarifa
                      <br />
                      (o que for menor)
                      <br />
                      <br />
                      EUA/PUJ/CUN/SJO/AUA:
                      <br />
                      U$310 ou 100% de tarifa)
                    </td>
                    <td className="border p-3 text-center">100% da tarifa</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">
                      Valor reembolsável
                    </td>
                    <td className="border p-3 text-center">
                      95% do valor residual em reais
                    </td>
                    <td className="border p-3 text-center">
                      40% do valor residual em reais
                    </td>
                    <td className="border p-3 text-center">Não reembolsável</td>
                    <td className="border p-3 text-center">Não reembolsável</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">No-show</td>
                    <td className="border p-3 text-center">Isento</td>
                    <td className="border p-3 text-center">
                      U$200 ou 100% da tarifa
                      <br />
                      (o que for menor)
                      <br />
                      <br />
                      EUA/PUJ/CUN/SJO/AUA:
                      <br />
                      U$330 ou 100% de tarifa)
                    </td>
                    <td className="border p-3 text-center">
                      U$230 ou 100% da tarifa
                      <br />
                      (o que for menor)
                      <br />
                      <br />
                      EUA/PUJ/CUN/SJO/AUA:
                      <br />
                      U$360 ou 100% de tarifa)
                    </td>
                    <td className="border p-3 text-center">Não reembolsável</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-sm text-gray-600">
              <p>
                * Valores em dólar serão convertidos para moeda de compra, de
                acordo com a cotação do dólar do dia.
              </p>
              <p>
                ¹No caso de alteração, se houver diferença de preço entre o voo
                original e o novo voo, o valor será cobrado.
              </p>
              <p>
                Os valores mencionados acima são válidos apenas para voos
                operados puramente pela GOL.
              </p>
              <p>
                Os custos de alteração, cancelamento e no-show são cobrados por
                trecho e por passageiro.
              </p>
              <p>
                Crianças de 2 a 12 anos incompletos pagam o mesmo valor da
                tarifa de um adulto.
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
                .
              </p>
              <p>
                Clientes que adquirirem passagens a partir de 23/01/2025 terão
                as novas regras de alteração/cancelamento e no show para voos
                com destino e origem a SJO e AUA
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Crédito */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#FF7020] flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              Crédito
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-4">
              Quando você cancela ou altera um voo, pode ser que fique com um
              crédito, ou seja, um valor aberto com a GOL. Escolhendo esta
              opção, você poderá usar este valor em novas compras de bilhetes,
              inclusive com tarifas promocionais; no complemento de diferença
              tarifária ou no pagamento de eventuais taxas no aeroporto.
            </p>
            <p className="mb-4">
              Confirmando o crédito, você terá um prazo de 365 dias corridos, a
              partir da data da geração do crédito, para utilizar este valor.
            </p>
            <p className="mb-4">
              Se você não utilizou o seu cartão e deseja solicitar os créditos,{" "}
              <Link href="#" className="text-[#FF7020] hover:underline">
                clique aqui
              </Link>{" "}
              e saiba como. Lembre-se que a compra de passagens com cartões de
              terceiros é permitida, mas a transferência de créditos entre
              contas GOL não é autorizada, porém você pode utilizar este crédito
              para compra em nome de terceiros.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start gap-3">
              <AlertTriangle className="text-yellow-500 h-6 w-6 flex-shrink-0 mt-1" />
              <p>
                Fique atento! Se não for cadastrado no site, você não poderá
                ficar com crédito na GOL. Neste caso você só pode receber o
                valor a que tiver direito em forma de reembolso. Para mais
                informações, entre em contato com nosso Atendimento Online.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Reembolso */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#FF7020] flex items-center gap-2">
              <RefreshCw className="h-6 w-6" />
              Reembolso
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-4">
              Quando alterar e tiver valor residual a receber ou cancelar um
              voo, você também tem a opção de solicitar reembolso destes
              valores. Fazendo essa escolha, você receberá de volta parte do
              valor pago para a mesma forma de pagamento. Deste valor, podem ser
              descontadas algumas taxas, como: cancelamento, não comparecimento
              (no-show) e multa de reembolso, conforme regras tarifárias
              contratadas no momento da compra. Se o reembolso solicitado for de
              um valor vinculado a um crédito, serão aplicadas as devidas taxas
              correspondentes.
            </p>
            <p className="mb-4">
              Fique atento: algumas tarifas têm condição de ida e volta
              obrigatórias, por isso não permitem reembolso após a utilização do
              primeiro voo.
            </p>
            <p className="mb-4">
              Você terá um prazo de até 365 dias corridos, a partir da data de
              compra da passagem, para solicitar o reembolso. Para mais
              informações sobre o prazo de reembolso em voos que compreendem o
              período de 19/03/2020 até 31/10/2021,{" "}
              <Link href="#" className="text-[#FF7020] hover:underline">
                saiba mais
              </Link>
              .
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h4 className="font-bold mb-2">Atenção</h4>
              <p>
                Atenção: se você utilizou cartão de débito ou dinheiro para
                realizar a compra da sua passagem, entre em contato conosco
                através do telefone 0800 704 0465 e informe seus dados bancários
                para o recebimento do valor reembolsável.
              </p>
            </div>
            <p>
              Se você emitiu sua passagem utilizando milhas Smiles para voar com
              a GOL, tenha atenção para não perder o voo e as milhas. Desde maio
              de 2012, em casos de no-show (não comparecimento ao embarque),
              elas deixaram de ser reembolsáveis. Entre em contato com a Smiles
              para verificar os detalhes dessa regra.
            </p>
          </CardContent>
        </Card>

        {/* No-show */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#FF7020] flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Não comparecimento ao embarque – No-show
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-4">
              O não comparecimento ao check-in em tempo hábil para atendimento¹
              ou ao portão de embarque² é considerado como no show. Quando isso
              acontece o passageiro deverá pagar uma taxa de acordo com a regra
              tarifária específica.
            </p>
            <p className="mb-4">
              Na compra de voos de ida e volta, se o trecho de ida não for
              utilizado, a sua passagem de volta estará garantida, desde que
              entre em contato conosco até o horário da decolagem do primeiro
              voo.
            </p>
            <p className="mb-4">
              Para evitar transtornos, sempre procure cancelar com antecedência
              as reservas que não for utilizar.
            </p>
            <p>
              Em caso de remarcação para um novo voo, o passageiro terá que
              arcar com eventuais diferenças tarifárias, se houverem, tanto por
              motivo de aumento de preços, como por indisponibilidade da mesma
              classe tarifária para o novo voo desejado.
            </p>
          </CardContent>
        </Card>

        {/* Informações Importantes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#FF7020] flex items-center gap-2">
              <Info className="h-6 w-6" />
              Importante
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <h4 className="font-bold mb-2">Tarifas Aeroportuárias:</h4>
            <p className="mb-4">
              As tarifas aeroportuárias são reembolsáveis, não fazendo parte da
              base de cálculo de multas ou penalidades.
            </p>

            <h4 className="font-bold mb-2">Desistência:</h4>
            <p>
              Para compras feitas com antecedência igual ou superior a 7 dias em
              relação à data de embarque, o passageiro poderá desistir da
              passagem aérea adquirida, sem qualquer ônus, desde que o faça no
              prazo de até 24 horas, a contar do recebimento do seu comprovante.
              Demais casos, o passageiro poderá solicitar o cancelamento,
              crédito ou reembolso podendo ser aplicadas penalidades conforme
              regra tarifária.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-[#FF7020] text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Precisa gerenciar sua reserva?
            </h2>
            <p className="text-lg mb-6">
              Acesse Minhas Viagens para alterar, cancelar ou solicitar
              reembolso do seu voo.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#FF7020] hover:bg-gray-100"
            >
              Acessar Minhas Viagens
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
