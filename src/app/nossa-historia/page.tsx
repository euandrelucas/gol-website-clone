import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: 2001,
    title: "Fundação da GOL",
    description:
      "A GOL Linhas Aéreas Inteligentes é fundada, introduzindo o conceito de baixo custo no mercado brasileiro de aviação.",
    image: "/historia/fundacao_gol.webp?height=400&width=600",
  },
  {
    year: 2004,
    title: "Abertura de Capital",
    description:
      "A GOL realiza sua oferta pública inicial (IPO) nas bolsas de São Paulo e Nova York.",
    image: "/historia/abertura_capital.webp?height=400&width=600",
  },
  {
    year: 2007,
    title: "Aquisição da VARIG",
    description:
      "A GOL adquire a VRG Linhas Aéreas (VARIG), expandindo significativamente sua presença no mercado.",
    image: "/historia/varig.webp?height=400&width=600",
  },
  {
    year: 2018,
    title: "Introdução do Boeing 737 MAX",
    description:
      "A GOL incorpora o Boeing 737 MAX à sua frota, marcando uma nova era de eficiência e conforto.",
    image: "/historia/b73max.webp?height=400&width=600",
  },
  {
    year: 2021,
    title: "20 Anos de Operação",
    description:
      "A GOL celebra 20 anos de operações, reafirmando seu compromisso com a inovação e excelência no serviço.",
    image: "/historia/gol_20_anos.webp?height=400&width=600",
  },
];

export default function NossaHistoria() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="GOL Airlines através dos anos"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#FF7020] bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Nossa História
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-[#FF7020]">
              Uma Trajetória de Sucesso e Inovação
            </h2>
            <p className="text-lg text-gray-700">
              Desde 2001, a GOL Linhas Aéreas Inteligentes tem revolucionado o
              mercado de aviação brasileiro. Nossa jornada é marcada por
              inovação constante, crescimento sustentável e um compromisso
              inabalável com a satisfação do cliente. Conheça os marcos que
              definiram nossa história e nos tornaram líderes no setor de
              aviação da América Latina.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-24">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-5xl font-bold text-[#FF7020] mb-4">
                    {event.year}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Card className="mt-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-[#FF7020]">
              O Futuro é Agora
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Olhando para o futuro, a GOL continua comprometida com a inovação,
              sustentabilidade e excelência em serviços. Estamos constantemente
              buscando novas maneiras de melhorar a experiência de viagem de
              nossos passageiros, investindo em tecnologia de ponta e práticas
              sustentáveis.
            </p>
            <p className="text-lg text-gray-700">
              Nossa missão é conectar pessoas com segurança e inteligência,
              promovendo o desenvolvimento social e econômico nas regiões onde
              operamos. Agradecemos a confiança de nossos clientes ao longo
              desses anos e estamos ansiosos para continuar servindo você nos
              céus por muitos anos vindouros.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
