import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Luggage,
  CheckSquare,
  Tag,
  RefreshCw,
  CreditCard,
  Map,
  Users,
  Award,
  Globe,
  Heart,
  Accessibility,
} from "lucide-react";

const informationCards = [
  {
    title: "Status de voo",
    description:
      "Deseja acompanhar a situação de um voo em tempo real? Pesquise por número ou trecho.",
    icon: <Plane className="h-8 w-8" />,
    link: "https://b2c.voegol.com.br/status-de-voo/",
    image: "/informacoes/status.avif?height=200&width=300",
    cta: "ACESSAR STATUS DE VOO",
  },
  {
    title: "Bagagem",
    description:
      "Fique por dentro de todas as regras para bagagem despachada e de mão.",
    icon: <Luggage className="h-8 w-8" />,
    link: "/informacoes/bagagem",
    image: "/informacoes/bagagem.webp?height=200&width=300",
    cta: "ACESSAR BAGAGEM",
  },
  {
    title: "Como fazer check-in",
    description:
      "Confira as opções de check-in disponíveis e o passo a passo de cada uma delas.",
    icon: <CheckSquare className="h-8 w-8" />,
    link: "/informacoes/check-in",
    image: "/informacoes/checkin.avif?height=200&width=300",
    cta: "ACESSAR COMO FAZER CHECK-IN",
  },
  {
    title: "Tarifas",
    description:
      "A GOL possui diversas tarifas. Conheça os benefícios e escolha a ideal para você.",
    icon: <Tag className="h-8 w-8" />,
    link: "/informacoes/tarifas",
    image: "/informacoes/tarifas.avif?height=200&width=300",
    cta: "ACESSAR TARIFAS",
  },
  {
    title: "Alterar voo",
    description:
      "Deseja modificar seu voo? Conheça as regras de cancelamento, reembolso e remarcação.",
    icon: <RefreshCw className="h-8 w-8" />,
    link: "/informacoes/alterar-voo",
    image: "/informacoes/alterar_voo.avif?height=200&width=300",
    cta: "ACESSAR ALTERAR VOO",
  },
  {
    title: "Formas de pagamento",
    description:
      "Cartão, lotérica e Agências Caixa ou transferência? Escolha a melhor opção de compra.",
    icon: <CreditCard className="h-8 w-8" />,
    link: "/informacoes/formas-pagamento",
    image: "/informacoes/formas_de_pagamento.avif?height=200&width=300",
    cta: "ACESSAR FORMAS DE PAGAMENTO",
  },
  {
    title: "Destinos",
    description:
      "Veja o que espera por você nos melhores destinos nacionais e internacionais.",
    icon: <Map className="h-8 w-8" />,
    link: "https://www.voegol.com.br/informacoes/destinos",
    image: "/informacoes/destinos.avif?height=200&width=300",
    cta: "ACESSAR DESTINOS",
  },
  {
    title: "Companhias aéreas parceiras",
    description:
      "Um guia completo sobre as vantagens de voar com nossas parceiras.",
    icon: <Users className="h-8 w-8" />,
    link: "https://www.voegol.com.br/informacoes/companhias-aereas-parceiras",
    image: "/informacoes/parceiros.avif?height=200&width=300",
    cta: "ACESSAR COMPANHIAS AÉREAS PARCEIRAS",
  },
  {
    title: "Programa de fidelidade Smiles",
    description:
      "Tudo o que você precisa saber sobre acúmulo e resgate de milhas e upgrade de categoria.",
    icon: <Award className="h-8 w-8" />,
    link: "https://www.voegol.com.br/informacoes/programa-de-fidelidade-smiles",
    image: "/informacoes/smiles.avif?height=200&width=300",
    cta: "ACESSAR PROGRAMA DE FIDELIDADE SMILES",
  },
  {
    title: "Stopover",
    description:
      "Que tal conhecer um novo destino antes de chegar ao ponto final de sua viagem?",
    icon: <Globe className="h-8 w-8" />,
    link: "/informacoes/stopover",
    image: "/informacoes/stopover.avif?height=200&width=300",
    cta: "ACESSAR STOPOVER",
  },
  {
    title: "Dicas de saúde em viagens",
    description:
      "Confira o conteúdo que a GOL preparou para sua viagem ser ainda mais tranquila.",
    icon: <Heart className="h-8 w-8" />,
    link: "https://www.voegol.com.br/informacoes/dicas-de-saude-em-viagens",
    image: "/informacoes/saude.avif?height=200&width=300",
    cta: "ACESSAR DICAS DE SAÚDE EM VIAGENS",
  },
  {
    title: "Assistência especial",
    description:
      "Tudo sobre o embarque de gestantes, obesos, pessoas com deficiência, idosos e enfermos.",
    icon: <Accessibility className="h-8 w-8" />,
    link: "/informacoes/assistencia-especial",
    image: "/informacoes/ae.avif?height=200&width=300",
    cta: "ACESSAR ASSISTÊNCIA ESPECIAL",
  },
];

export default function Informacoes() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Avião ao céu ensolarado com nuvens abaixo dele"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#FF7020] bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Informações
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {informationCards.map((card, index) => (
            <Link href={card.link} key={index}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {card.icon}
                      <h2 className="text-xl font-bold">{card.title}</h2>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <p className="text-[#FF7020] font-semibold group-hover:underline">
                    {card.cta}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
