import { CalendarDays } from "lucide-react";

interface SearchSummaryProps {
  origem: string;
  destino: string;
  ida: string;
  volta?: string;
}

export function SearchSummary({
  origem,
  destino,
  ida,
  volta,
}: SearchSummaryProps) {
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
        <button className="text-orange-500 hover:text-orange-600 font-medium">
          Modificar busca
        </button>
      </div>
    </div>
  );
}
