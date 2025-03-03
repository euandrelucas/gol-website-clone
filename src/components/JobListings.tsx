"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";

async function getCarreiras() {
  const res = await fetch("http://localhost:3000/api/carreiras", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch carreiras");
  }
  return res.json();
}

interface Job {
  titulo: string;
  localizacao: string;
  tipo: string;
  link: string;
}

export default function JobListings() {
  const [carreiras, setCarreiras] = useState([]);

  useEffect(() => {
    getCarreiras().then((data) => {
      setCarreiras(data.slice(0, 4)); // Pegando apenas as 4 primeiras vagas
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {carreiras.map((job: Job, index: number) => (
        <Card
          key={index}
          className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {job.titulo}
            </CardTitle>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <MapPin size={16} />
              <span>{job.localizacao}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Users size={16} className="text-[#FF7020]" />
              <span className="text-gray-600">{job.tipo}</span>
            </div>
            <Badge className="bg-[#FF7020] hover:bg-[#E56218] text-white">
              {job.tipo}
            </Badge>
            <Link
              href={job.link}
              className="block mt-4 text-[#FF7020] hover:text-[#E56218] font-semibold"
            >
              Ver detalhes e candidatar-se
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
