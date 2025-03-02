import { CalendarDays } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import FlightSearchForm from "./flight-search-form";
import { useState } from "react";

interface SearchSummaryProps {
  origem: string;
  destino: string;
  ida: string;
  volta?: string;
  origemLabel: string;
  destinoLabel: string;
}

export function SearchSummary({
  origem,
  destino,
  ida,
  volta,
  origemLabel,
  destinoLabel,
}: SearchSummaryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold text-gray-800">
            {origem} → {destino}
          </p>
          <div className="flex items-center mt-1 text-gray-600">
            <CalendarDays size={16} className="mr-2" />
            <p>
              {ida}
              {volta ? ` - ${volta}` : ""}
            </p>
          </div>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="hover:cursor-pointer text-orange-500 hover:text-orange-600 font-medium"
            >
              Modificar busca
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Modificar busca</DialogTitle>
            </DialogHeader>
            <FlightSearchForm
              initialOrigin={origem}
              initialDestination={destino}
              initialOriginLabel={origemLabel}
              initialDestinationLabel={destinoLabel}
              onSearch={() => setIsOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
