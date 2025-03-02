"use client";

import * as React from "react";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Airport {
  value: string;
  label: string;
}

interface AirportComboboxProps {
  placeholder: string;
  airports: Airport[];
  value: string;
  onChange: (value: string) => void;
  onLabelChange: (label: string) => void;
}

export function AirportCombobox({
  placeholder,
  airports,
  value,
  onChange,
  onLabelChange,
}: AirportComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [displayValue, setDisplayValue] = React.useState("");

  // Update display value when value changes
  React.useEffect(() => {
    if (value) {
      const selectedAirport = airports.find(
        (airport) => airport.value === value
      );
      if (selectedAirport) {
        setDisplayValue(selectedAirport.label);
      }
    } else {
      setDisplayValue("");
    }
  }, [value, airports]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between pr-4 py-2 text-left font-normal border rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
        >
          <MapPin
            className="flex items-center mr-2 h-4 w-4 text-gray-500"
            size={18}
          />
          <span className="truncate text-gray-800">
            {displayValue || placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-gray-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 border border-gray-300 rounded-md shadow-lg bg-white">
        <Command>
          <CommandInput
            placeholder={`Pesquisar ${placeholder.toLowerCase()}`}
            className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none"
          />
          <CommandList className="max-h-[300px] overflow-y-auto">
            <CommandEmpty className="p-2 text-gray-500">
              Nenhum aeroporto encontrado.
            </CommandEmpty>
            <CommandGroup>
              {airports.map((airport) => (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    onChange(airport.value);
                    onLabelChange(airport.label);
                    setOpen(false);
                  }}
                  key={airport.value}
                >
                  <CommandItem
                    key={airport.value}
                    value={airport.label}
                    onClick={(e) => {
                      e.preventDefault();
                      onChange(airport.value);
                      onLabelChange(airport.label);
                      setOpen(false);
                    }}
                    className="flex items-center px-3 py-2 hover:bg-gray-100 hover:cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 text-orange-500",
                        value === airport.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {airport.label}
                  </CommandItem>
                </div>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
