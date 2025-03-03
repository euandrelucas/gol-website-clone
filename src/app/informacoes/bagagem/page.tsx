import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Luggage, Scale, AlertTriangle } from "lucide-react";

export default function Bagagem() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Bagagens em aeroporto"
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
            <h1 className="text-5xl font-bold text-white mb-4">Bagagem</h1>
            <p className="text-xl text-white max-w-2xl">
              Tudo o que você precisa saber sobre bagagem despachada e de mão.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Tipos de Bagagem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#FF7020] flex items-center gap-2">
                <Luggage className="h-6 w-6" />
                Bagagem de Mão
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Scale className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                  <p>Peso máximo: 10kg</p>
                </li>
                <li className="flex items-start space-x-3">
                  <Luggage className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                  <p>Dimensões máximas: 55cm x 35cm x 25cm</p>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                  <p>
                    Deve ser acomodada sob o assento ou no compartimento
                    superior
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#FF7020] flex items-center gap-2">
                <Luggage className="h-6 w-6" />
                Bagagem Despachada
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Scale className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                  <p>Peso máximo: 23kg por volume</p>
                </li>
                <li className="flex items-start space-x-3">
                  <Luggage className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                  <p>
                    Dimensões máximas: 158cm lineares (altura + largura +
                    comprimento)
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-[#FF7020] flex-shrink-0 mt-1" />
                  <p>Quantidade varia conforme a tarifa escolhida</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Informações Adicionais */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#FF7020]">
              Informações Importantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Itens Proibidos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Materiais inflamáveis ou explosivos</li>
                  <li>• Substâncias tóxicas ou radioativas</li>
                  <li>• Armas e munições sem documentação</li>
                  <li>• Objetos pontiagudos ou cortantes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Dicas Importantes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Identifique sua bagagem com nome e telefone</li>
                  <li>• Chegue com antecedência para despachar</li>
                  <li>• Mantenha itens valiosos na bagagem de mão</li>
                  <li>• Consulte as regras específicas do seu destino</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-[#FF7020] text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Precisa de bagagem extra?
            </h2>
            <p className="text-lg mb-6">
              Adicione bagagem extra ao seu voo com antecedência e economize.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#FF7020] hover:bg-gray-100"
            >
              Comprar Bagagem Extra
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
