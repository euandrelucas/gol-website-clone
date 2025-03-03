"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { Spinner } from "@/components/ui/spinner";

const DynamicJobOpportunities = dynamic(
  () => import("@/components/job-opportunities"),
  {
    loading: () => (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    ),
    ssr: false,
  }
);

export default function Oportunidades() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/trabalhe-conosco">
            <Button variant="outline" className="hover:cursor-pointer mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Trabalhe
              Conosco
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">
            Todas as Oportunidades
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Explore todas as vagas disponíveis na GOL
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <Spinner size="lg" />
            </div>
          }
        >
          <DynamicJobOpportunities />
        </Suspense>
      </div>
    </main>
  );
}
