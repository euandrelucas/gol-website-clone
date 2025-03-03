import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckSquare, Smartphone, Globe, Clock } from "lucide-react";

export default function CheckIn() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Passageiro fazendo check-in"
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
              Como fazer check-in
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Confira as opções de check-in disponíveis e o passo a passo de
              cada uma delas.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introdução */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#FF7020]">
              Opções de Check-in
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              O check-in é o procedimento que confirma sua presença no voo e
              garante seu assento. Você pode realizá-lo de diferentes formas,
              escolhendo a que for mais conveniente para você.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Clock className="text-[#FF7020] h-6 w-6" />
              <p className="font-medium">
                O check-in abre 72 horas antes do voo e fecha 40 minutos antes
                do embarque para voos nacionais e 1 hora para voos
                internacionais.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Opções de Check-in */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-[#FF7020] text-white p-4 rounded-full mb-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold mb-4">
                Check-in pelo Aplicativo
              </CardTitle>
              <ul className="space-y-2 text-left mb-6">
                <li>• Disponível 72h antes do voo</li>
                <li>• Rápido e prático</li>
                <li>• Cartão de embarque digital</li>
                <li>• Escolha de assentos</li>
              </ul>
              <Button className="w-full bg-[#FF7020] hover:bg-[#E56218] text-white">
                Baixar Aplicativo
              </Button>
            </div>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-[#FF7020] text-white p-4 rounded-full mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold mb-4">
                Check-in pelo Site
              </CardTitle>
              <ul className="space-y-2 text-left mb-6">
                <li>• Disponível 72h antes do voo</li>
                <li>• Acesso pelo computador ou celular</li>
                <li>• Cartão de embarque por e-mail</li>
                <li>• Escolha de assentos</li>
              </ul>
              <Button className="w-full bg-[#FF7020] hover:bg-[#E56218] text-white">
                Fazer Check-in Online
              </Button>
            </div>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-[#FF7020] text-white p-4 rounded-full mb-4">
                <CheckSquare className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold mb-4">
                Check-in no Aeroporto
              </CardTitle>
              <ul className="space-y-2 text-left mb-6">
                <li>• Nos balcões de atendimento</li>
                <li>• Nos totens de autoatendimento</li>
                <li>• Cartão de embarque impresso</li>
                <li>• Assistência de funcionários</li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                Recomendamos chegar com 2h de antecedência para voos nacionais e
                3h para internacionais.
              </p>
            </div>
          </Card>
        </div>

        {/* Passo a Passo */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#FF7020]">
              Passo a passo do Check-in Online
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ol className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <p>Acesse o site da GOL ou abra o aplicativo</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <p>Clique na opção &quot;Fazer Check-in&quot;</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <p>Informe seu código de reserva (e-ticket) e sobrenome</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  4
                </div>
                <p>Selecione o voo para fazer check-in</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  5
                </div>
                <p>Escolha seu assento (opcional)</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#FF7020] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  6
                </div>
                <p>Confirme seus dados e receba seu cartão de embarque</p>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-[#FF7020] text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para fazer seu check-in?
            </h2>
            <p className="text-lg mb-6">
              Faça seu check-in online e evite filas no aeroporto.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#FF7020] hover:bg-gray-100"
            >
              Fazer Check-in Agora
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
