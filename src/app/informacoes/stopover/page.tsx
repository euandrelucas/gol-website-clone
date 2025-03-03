import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plane, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Stopover() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Vista aérea de cidade com stopover"
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
            <h1 className="text-5xl font-bold text-white mb-4">Stopover</h1>
            <p className="text-xl text-white max-w-2xl">
              Que tal conhecer um novo destino antes de chegar ao ponto final de
              sua viagem?
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introdução */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#FF7020]">
              Entenda como funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#FF7020] text-white p-4 rounded-full mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Embarque</h3>
                <p className="text-gray-600">
                  Você começa sua viagem, que possui algum trecho com conexão
                  nos aeroportos de São Paulo (CGH, GRU ou VCP), de Brasília
                  (BSB) ou do Rio de Janeiro (SDU e GIG).
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-[#FF7020] text-white p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Localização</h3>
                <p className="text-gray-600">
                  Desembarca em uma parada na cidade correspondente: São Paulo,
                  Campinas, Brasília ou Rio de Janeiro.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-[#FF7020] text-white p-4 rounded-full mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Aproveite o tempo</h3>
                <p className="text-gray-600">
                  Hora de aproveitar o tempo extra para explorar as atrações que
                  o lugar oferece.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-[#FF7020] text-white p-4 rounded-full mb-4">
                  <Plane className="h-8 w-8 transform rotate-45" />
                </div>
                <h3 className="font-semibold mb-2">Avião</h3>
                <p className="text-gray-600">
                  Agora, você embarca outra vez, mas em direção ao ponto final
                  de sua viagem.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Destinos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Destinos disponíveis para Stopover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                city: "São Paulo",
                airports: "GRU, CGH, VCP",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                city: "Rio de Janeiro",
                airports: "GIG, SDU",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                city: "Brasília",
                airports: "BSB",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                city: "Campinas",
                airports: "VCP",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((destination, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.city}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{destination.city}</h3>
                  <p className="text-sm text-gray-600">
                    Aeroportos: {destination.airports}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Dicas */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#FF7020]">
              Dicas para aproveitar seu Stopover
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                <p>Planeje com antecedência os locais que deseja visitar</p>
              </li>
              <li className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                <p>
                  Verifique o tempo necessário para deslocamento entre o
                  aeroporto e as atrações
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                <p>
                  Considere o horário do seu próximo voo para não perder o
                  embarque
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                <p>
                  Leve apenas o necessário para o passeio, deixando a bagagem
                  maior no guarda-volumes do aeroporto
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-[#FF7020] text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para fazer seu Stopover?
            </h2>
            <p className="text-lg mb-6">
              Aproveite esta oportunidade única de conhecer novos destinos
              durante sua viagem.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#FF7020] hover:bg-gray-100"
            >
              Buscar Voos com Stopover
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
