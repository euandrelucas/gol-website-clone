import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CreditCard,
  Building,
  Landmark,
  Wallet,
  AlertTriangle,
} from "lucide-react";

export default function FormasPagamento() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Pagamento online"
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
            <h1 className="text-5xl font-bold text-white mb-4">
              Formas de Pagamento
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Cartão, lotérica e Agências Caixa ou transferência? Escolha a
              melhor opção de compra.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introdução */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#FF7020]">
              Opções de pagamento disponíveis
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A GOL oferece diversas formas de pagamento para facilitar a compra
              da sua passagem. Conheça as opções e escolha a que melhor se
              adapta às suas necessidades.
            </p>
          </CardContent>
        </Card>

        {/* Formas de Pagamento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <CreditCard className="h-8 w-8 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Cartão de Crédito
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>
                    Aceitamos as principais bandeiras: Visa, Mastercard,
                    American Express, Elo, Diners
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>
                    Parcelamento em até 12x (sujeito a juros a partir da 7ª
                    parcela)
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>
                    Cartões internacionais são aceitos apenas para pagamento à
                    vista
                  </p>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="Visa"
                  width={50}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="Mastercard"
                  width={50}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="American Express"
                  width={50}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="Elo"
                  width={50}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="Diners"
                  width={50}
                  height={30}
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Building className="h-8 w-8 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Lotéricas e Agências Caixa
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>
                    Gere um boleto e pague em qualquer lotérica ou agência da
                    Caixa
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>Prazo de até 24h para confirmação do pagamento</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>
                    Disponível apenas para compras com mais de 3 dias de
                    antecedência do voo
                  </p>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=80"
                  alt="Caixa"
                  width={80}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=40&width=80"
                  alt="Lotéricas"
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Landmark className="h-8 w-8 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Transferência Bancária
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>Disponível para clientes de bancos selecionados</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>Confirmação imediata do pagamento</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>Pagamento à vista</p>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="Banco do Brasil"
                  width={50}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="Bradesco"
                  width={50}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="Itaú"
                  width={50}
                  height={30}
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Wallet className="h-8 w-8 text-[#FF7020]" />
                <CardTitle className="text-xl font-bold">
                  Carteiras Digitais
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>Pagamento rápido e seguro</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>Confirmação imediata</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    •
                  </div>
                  <p>Disponível apenas para pagamento à vista</p>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="PayPal"
                  width={50}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="Google Pay"
                  width={50}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=30&width=50"
                  alt="Apple Pay"
                  width={50}
                  height={30}
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Informações Importantes */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-4">
              <AlertTriangle className="h-6 w-6 text-[#FF7020]" />
              <CardTitle className="text-2xl font-bold text-[#FF7020]">
                Informações Importantes
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  •
                </div>
                <p>
                  Para compras com cartão de crédito, o titular deve ser um dos
                  passageiros ou responsável legal
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  •
                </div>
                <p>
                  Boletos devem ser pagos até a data de vencimento, caso
                  contrário a reserva será cancelada
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  •
                </div>
                <p>
                  Para compras de última hora (menos de 3 horas antes do voo),
                  apenas cartão de crédito é aceito
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  •
                </div>
                <p>
                  Todas as transações são realizadas em ambiente seguro e
                  criptografado
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-[#FF7020] text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para comprar sua passagem?
            </h2>
            <p className="text-lg mb-6">
              Escolha a forma de pagamento que mais se adequa às suas
              necessidades e boa viagem!
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#FF7020] hover:bg-gray-100"
            >
              Comprar Passagens
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
