import Image from "next/image";
import FlightSearchForm from "@/components/flight-search-form";
import DestinationCard from "@/components/destination-card";
import ServiceCard from "@/components/service-card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FF7020] to-[#FF9D6C] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Voe com a GOL para os melhores destinos
              </h1>
              <p className="text-lg md:text-xl">
                Encontre as melhores ofertas para suas próximas viagens
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <FlightSearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Destinos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationCard
              image="/destinos/riodejaneiro.webp?height=300&width=400"
              title="Rio de Janeiro"
              price="299"
            />
            <DestinationCard
              image="/destinos/saopaulo.webp?height=300&width=400"
              title="São Paulo"
              price="249"
            />
            <DestinationCard
              image="/destinos/fortaleza.webp?height=300&width=400"
              title="Fortaleza"
              price="399"
            />
            <DestinationCard
              image="/destinos/salvador.webp?height=300&width=400"
              title="Salvador"
              price="349"
            />
            <DestinationCard
              image="/destinos/recife.webp?height=300&width=400"
              title="Recife"
              price="379"
            />
            <DestinationCard
              image="/destinos/brasilia.webp?height=300&width=400"
              title="Brasília"
              price="289"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon="luggage"
              title="Bagagem"
              description="Informações sobre bagagem despachada e de mão"
              link="/informacoes/bagagem"
            />
            <ServiceCard
              icon="check-in"
              title="Check-in"
              description="Faça seu check-in online de forma rápida e fácil"
              link="/informacoes/check-in"
            />
            <ServiceCard
              icon="seat"
              title="Escolha de Assentos"
              description="Escolha seu assento preferido com antecedência"
              link="/informacoes/escolha-assentos"
            />
            <ServiceCard
              icon="miles"
              title="Programa Smiles"
              description="Acumule milhas e troque por passagens"
              link="https://www.voegol.com.br/informacoes/programa-de-fidelidade-smiles"
            />
          </div>
        </div>
      </section>

      {/* App Promo Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Baixe o App da GOL</h2>
              <p className="text-lg">
                Tenha a GOL sempre com você. Faça check-in, acompanhe seus voos
                e muito mais.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black hover:cursor-pointer text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  <span>App Store</span>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  <span>Google Play</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-96 bg-gray-800 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-2 bg-gray-100 rounded-2xl">
                  <Image
                    src="/aplicativo_gol.webp?height=600&width=300"
                    alt="GOL App"
                    width={300}
                    height={600}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
