"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GolLogo } from "@/components/gol-logo";
import { Clock, Plane } from "lucide-react";
import { SearchSummary } from "@/components/search-summary";

interface Flight {
  origem: string;
  destino: string;
  duracao: string;
  operadoPor: string;
  preco: string;
}

export default function ResultadosPage() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchFlights = async () => {
      const origem = searchParams.get("origem");
      const destino = searchParams.get("destino");
      const ida = searchParams.get("ida");
      const volta = searchParams.get("volta");

      try {
        const response = await fetch("/api/consultarVoos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ origem, destino, ida, volta }),
        });

        if (!response.ok) {
          throw new Error("Falha ao buscar voos");
        }

        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error("Erro ao buscar voos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Resultados da Busca
      </h1>
      <SearchSummary
        origem={searchParams.get("origem") || ""}
        destino={searchParams.get("destino") || ""}
        ida={searchParams.get("ida") || ""}
        volta={searchParams.get("volta") || ""}
      />
      <div className="grid gap-6">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                  <Plane className="text-orange-500" size={24} />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {flight.origem} → {flight.destino}
                    </p>
                    <p className="text-sm text-gray-600">{flight.duracao}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-500">
                    {flight.preco}
                  </p>
                  <p className="text-sm text-gray-600">por pessoa</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-700">{flight.operadoPor}</p>
                  <GolLogo className="w-8 h-8" />
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock size={16} />
                  <p className="text-sm">{flight.duracao}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <button className="hover:cursor-pointer w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Selecionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
