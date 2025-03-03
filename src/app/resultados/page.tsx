"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GolLogo } from "@/components/gol-logo";
import { Clock, Plane, AlertCircle } from "lucide-react";
import { SearchSummary } from "@/components/search-summary";

interface Flight {
  origem: string;
  destino: string;
  duracao: string;
  operadoPor: string;
  preco: string;
}

export default function ResultadosPage() {
  const [flights, setFlights] = useState<Flight[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
        if (data.length === 0) {
          setError("Não foram encontrados voos para esta pesquisa.");
        }
      } catch (error) {
        console.error("Erro ao buscar voos:", error);
        setError(
          "Ocorreu um erro ao buscar os voos. Por favor, tente novamente mais tarde."
        );
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
        origem={searchParams.get("origemLabel") || ""}
        destino={searchParams.get("destinoLabel") || ""}
        ida={searchParams.get("ida") || ""}
        volta={searchParams.get("volta") || ""}
        origemLabel={searchParams.get("origemLabel") || ""}
        destinoLabel={searchParams.get("destinoLabel") || ""}
        setLoading={setLoading}
      />
      {error ? (
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6"
          role="alert"
        >
          <div className="flex items-center">
            <AlertCircle className="mr-2" />
            <p>{error}</p>
          </div>
        </div>
      ) : flights && flights.length > 0 ? (
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
      ) : (
        <div
          className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
          role="alert"
        >
          <div className="flex items-center">
            <AlertCircle className="mr-2" />
            <p>
              Nenhum voo encontrado para os critérios de busca especificados.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
