"use client";

import type * as React from "react";
import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  showHeader?: boolean;
  selected?: Date;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  showHeader = true,
  ...props
}: CalendarProps) {
  const [mounted, setMounted] = useState(false);

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Card className={cn("p-0 overflow-hidden shadow-md", className)}>
      {showHeader && (
        <div className="flex items-center justify-between bg-primary/5 p-3 border-b">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">
              {format(props.selected || new Date(), "MMMM yyyy", {
                locale: ptBR,
              })}
            </span>
          </div>
        </div>
      )}
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "h-8 w-8 bg-transparent p-0 opacity-70 hover:opacity-100 hover:bg-primary/10 transition-all duration-200"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-10 font-medium text-[0.8rem] uppercase",
          row: "flex w-full mt-2",
          cell: cn(
            "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
            "h-10 w-10 [&:has([aria-selected])]:bg-primary/10",
            "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-10 w-10 p-0 font-normal rounded-full transition-all duration-200",
            "aria-selected:opacity-100 hover:bg-primary/10"
          ),
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-full",
          day_today:
            "bg-accent text-accent-foreground font-semibold ring-2 ring-primary/20 ring-offset-1",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-primary/15 aria-selected:text-foreground",
          day_range_start:
            "aria-selected:bg-primary aria-selected:text-primary-foreground rounded-full",
          day_range_end:
            "aria-selected:bg-primary aria-selected:text-primary-foreground rounded-full",
          day_hidden: "invisible",
          ...classNames,
        }}
        locale={ptBR}
        {...props}
      />
    </Card>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
