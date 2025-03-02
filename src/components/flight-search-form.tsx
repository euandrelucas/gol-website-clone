"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Users, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AirportCombobox } from "@/components/airport-combobox";
import { airports } from "@/lib/airports";
import "react-datepicker/dist/react-datepicker.css";

interface FlightSearchFormProps {
  initialOrigin?: string;
  initialDestination?: string;
  initialDepartureDate?: Date | null;
  initialReturnDate?: Date | null;
  initialOriginLabel?: string;
  initialDestinationLabel?: string;
  onSearch?: () => void;
}

export default function FlightSearchForm({
  initialOrigin = "",
  initialDestination = "",
  initialDepartureDate = null,
  initialReturnDate = null,
  initialOriginLabel = "",
  initialDestinationLabel = "",
  onSearch,
}: FlightSearchFormProps) {
  const router = useRouter();
  const [tripType, setTripType] = useState("roundtrip");
  const [origin, setOrigin] = useState(initialOrigin);
  const [originLabel, setOriginLabel] = useState(initialOriginLabel);
  const [destination, setDestination] = useState(initialDestination);
  const [destinationLabel, setDestinationLabel] = useState(
    initialDestinationLabel
  );
  const [departureDate, setDepartureDate] = useState<Date | null>(
    initialDepartureDate ? new Date(initialDepartureDate) : null
  );
  const [returnDate, setReturnDate] = useState<Date | null>(
    initialReturnDate ? new Date(initialReturnDate) : null
  );
  const [passengers, setPassengers] = useState(1);
  const [formError, setFormError] = useState("");

  // Reset return date if trip type changes to one-way
  useEffect(() => {
    if (tripType === "oneway") {
      setReturnDate(null);
    }
  }, [tripType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!origin) {
      setFormError("Por favor, selecione uma origem.");
      return;
    }

    if (!destination) {
      setFormError("Por favor, selecione um destino.");
      return;
    }

    if (!departureDate) {
      setFormError("Por favor, selecione uma data de ida.");
      return;
    }

    if (tripType === "roundtrip" && !returnDate) {
      setFormError("Por favor, selecione uma data de volta.");
      return;
    }

    if (origin === destination) {
      setFormError("Origem e destino não podem ser iguais.");
      return;
    }

    // Clear any previous errors
    setFormError("");

    const searchParams = new URLSearchParams({
      origem: origin,
      destino: destination,
      origemLabel: originLabel,
      destinoLabel: destinationLabel,
      ida: format(departureDate, "dd-MM-yyyy"),
      volta: returnDate ? format(returnDate, "dd-MM-yyyy") : "",
      passageiros: passengers.toString(),
    });

    router.push(`/resultados?${searchParams.toString()}`);
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-6 rounded-lg max-w-4xl mx-auto"
    >
      <div className="mb-6">
        <RadioGroup
          defaultValue="roundtrip"
          className="flex space-x-4"
          onValueChange={setTripType}
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            <RadioGroupItem value="roundtrip" id="roundtrip" />
            <Label htmlFor="roundtrip" className="text-gray-700 cursor-pointer">
              Ida e volta
            </Label>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <RadioGroupItem value="oneway" id="oneway" />
            <Label htmlFor="oneway" className="text-gray-700 cursor-pointer">
              Somente ida
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="origin" className="text-gray-700 mb-1 block">
            Origem
          </Label>
          <AirportCombobox
            placeholder="De onde você vai sair?"
            airports={airports}
            value={origin}
            onChange={setOrigin}
            onLabelChange={setOriginLabel}
          />
        </div>
        <div>
          <Label htmlFor="destination" className="text-gray-700 mb-1 block">
            Destino
          </Label>
          <AirportCombobox
            placeholder="Para onde você vai?"
            airports={airports}
            value={destination}
            onChange={setDestination}
            onLabelChange={setDestinationLabel}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="departureDate" className="text-gray-700 mb-1 block">
            Data de ida
          </Label>
          <div className="relative">
            <DatePicker
              id="departureDate"
              selected={departureDate}
              onChange={(date: Date | null) => setDepartureDate(date)}
              dateFormat="dd/MM/yyyy"
              locale={ptBR}
              placeholderText="Selecione uma data"
              className="w-full pl-10 pr-3 py-2 border rounded-md text-gray-800"
              required
              minDate={new Date()}
            />
            <CalendarIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>
        {tripType === "roundtrip" && (
          <div>
            <Label htmlFor="returnDate" className="text-gray-700 mb-1 block">
              Data de volta
            </Label>
            <div className="relative">
              <DatePicker
                id="returnDate"
                selected={returnDate}
                onChange={(date: Date | null) => setReturnDate(date)}
                dateFormat="dd/MM/yyyy"
                locale={ptBR}
                placeholderText="Selecione uma data"
                className="w-full pl-10 pr-3 py-2 border rounded-md text-gray-800"
                minDate={departureDate || new Date()}
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
        <Label htmlFor="passengers" className="text-gray-700 mb-1 block">
          Passageiros
        </Label>
        <div className="relative">
          <Users
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            id="passengers"
            type="number"
            min="1"
            max="9"
            value={passengers}
            onChange={(e) => setPassengers(Number.parseInt(e.target.value))}
            className="pl-10 text-gray-800"
          />
        </div>
      </div>

      {formError && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
          {formError}
        </div>
      )}

      <Button
        type="submit"
        className="hover:cursor-pointer w-full bg-[#FF7020] hover:bg-[#E56218] text-white"
      >
        <Plane className="mr-2" size={18} />
        Buscar Voos
      </Button>
    </form>
  );
}
