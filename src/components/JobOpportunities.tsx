"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";

async function getCarreiras() {
  const res = await fetch("/api/carreiras", {
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

export default function JobOpportunities() {
  const [carreiras, setCarreiras] = useState<Job[]>([]);

  useEffect(() => {
    getCarreiras().then((data) => {
      setCarreiras(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {carreiras.map((job: Job, index: number) => (
        <Card
          key={index}
          className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">
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
            <Link href={job.link} target="_blank" rel="noopener noreferrer">
              <Button className="hover:cursor-pointer w-full mt-4 bg-[#FF7020] hover:bg-[#E56218] text-white">
                Candidatar-se
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
