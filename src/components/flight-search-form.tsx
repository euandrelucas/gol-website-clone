"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, MapPin, Users, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import "react-datepicker/dist/react-datepicker.css";

export default function FlightSearchForm() {
  const router = useRouter();
  const [tripType, setTripType] = useState("roundtrip");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [passengers, setPassengers] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin || !destination || !departureDate) return;

    const searchParams = new URLSearchParams({
      origem: origin,
      destino: destination,
      ida: format(departureDate, "dd-MM-yyyy"),
      volta: returnDate ? format(returnDate, "dd-MM-yyyy") : "",
      passageiros: passengers.toString(),
    });

    router.push(`/resultados?${searchParams.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="p-6 rounded-lg max-w-4xl mx-auto"
    >
      <div className="mb-6">
        <RadioGroup
          defaultValue="roundtrip"
          className="flex space-x-4"
          onValueChange={setTripType}
        >
          <div className="hover:cursor-pointer flex items-center space-x-2">
            <RadioGroupItem value="roundtrip" id="roundtrip" />
            <Label htmlFor="roundtrip" className="text-gray-700">
              Ida e volta
            </Label>
          </div>
          <div className="hover:cursor-pointer flex items-center space-x-2">
            <RadioGroupItem value="oneway" id="oneway" />
            <Label htmlFor="oneway" className="text-gray-700">
              Somente ida
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="origin" className="text-gray-700">
            Origem
          </Label>
          <div className="relative mt-1">
            <MapPin
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              id="origin"
              placeholder="De onde você vai sair?"
              className="pl-10 text-gray-800"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="destination" className="text-gray-700">
            Destino
          </Label>
          <div className="relative mt-1">
            <MapPin
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              id="destination"
              placeholder="Para onde você vai?"
              className="pl-10 text-gray-800"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="departureDate" className="text-gray-700">
            Data de ida
          </Label>
          <div className="relative mt-1">
            <DatePicker
              id="departureDate"
              selected={departureDate}
              onChange={(date: Date | null) => setDepartureDate(date)}
              dateFormat="dd/MM/yyyy"
              locale={ptBR}
              placeholderText="Selecione uma data"
              className="w-full pl-10 pr-3 py-2 border rounded-md text-gray-800"
              required
            />
            <CalendarIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>
        {tripType === "roundtrip" && (
          <div>
            <Label htmlFor="returnDate" className="text-gray-700">
              Data de volta
            </Label>
            <div className="relative mt-1">
              <DatePicker
                id="returnDate"
                selected={returnDate}
                onChange={(date: Date | null) => setReturnDate(date)}
                dateFormat="dd/MM/yyyy"
                locale={ptBR}
                placeholderText="Selecione uma data"
                className="w-full pl-10 pr-3 py-2 border rounded-md text-gray-800"
                minDate={departureDate || undefined}
              />
              <CalendarIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <Label htmlFor="passengers" className="text-gray-700">
          Passageiros
        </Label>
        <div className="relative mt-1">
          <Users
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            id="passengers"
            type="number"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(Number.parseInt(e.target.value))}
            className="pl-10 text-gray-800"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="hover:cursor-pointer w-full bg-orange-500 hover:bg-orange-600 text-white"
      >
        <Plane className="mr-2" size={18} />
        Buscar Voos
      </Button>
    </form>
  );
}
