"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { Spinner } from "@/components/ui/spinner";

const DynamicJobListings = dynamic(() => import("@/components/job-listings"), {
  loading: () => (
    <div className="flex justify-center items-center h-64">
      <Spinner size="lg" />
    </div>
  ),
  ssr: false,
});

export default function TrabalheConosco() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/assets/timegol.webp"
          alt="Equipe GOL - Tripulação diversa sorrindo em uniforme"
          layout="fill"
          objectFit="cover"
          className="object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-5xl font-bold mb-4">
              Faça Parte do Time de Águias
            </h1>
            <p className="text-xl mb-8">
              Junte-se a uma equipe apaixonada por conectar pessoas e criar
              experiências extraordinárias nos céus do Brasil
            </p>
            <Link href="/trabalhe-conosco/oportunidades">
              <Button className="bg-[#FF7020] hover:bg-[#E56218] hover:cursor-pointer text-white text-lg py-6 px-8">
                Ver Vagas Disponíveis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Cultura e Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Nossa Cultura e Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Inovação",
                description:
                  "Buscamos constantemente novas formas de melhorar a experiência de nossos clientes e colaboradores.",
              },
              {
                title: "Segurança",
                description:
                  "A segurança é nossa prioridade número um em todas as operações e decisões.",
              },
              {
                title: "Excelência",
                description:
                  "Nos esforçamos para oferecer o melhor serviço em todos os aspectos de nosso negócio.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#FF7020]">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Benefícios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Passagens com Desconto",
                description:
                  "Viaje mais pagando menos com nossos descontos exclusivos para colaboradores.",
              },
              {
                title: "Plano de Saúde",
                description:
                  "Oferecemos um plano de saúde abrangente para você e sua família.",
              },
              {
                title: "Desenvolvimento Profissional",
                description:
                  "Invista em sua carreira com nossos programas de treinamento e desenvolvimento.",
              },
              {
                title: "Ambiente Dinâmico",
                description:
                  "Trabalhe em um ambiente estimulante e colaborativo com profissionais apaixonados.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vagas em Destaque */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Vagas em Destaque
          </h2>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <Spinner size="lg" />
              </div>
            }
          >
            <DynamicJobListings />
          </Suspense>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center bg-[#FF7020] text-white py-16 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para Decolar sua Carreira?
          </h2>
          <p className="text-xl mb-8">
            Junte-se à equipe GOL e faça parte de uma das maiores companhias
            aéreas do Brasil!
          </p>
          <Link href="/trabalhe-conosco/oportunidades">
            <Button className="bg-white text-[#FF7020] hover:bg-gray-100 hover:cursor-pointer text-lg py-6 px-8">
              Ver Todas as Vagas
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
