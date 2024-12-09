import * as React from "react";
import { Ellipsis } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "../ui/button";

// TEMPORARY EVENTS
const events = [
  {
    id: 1,
    title: "Semana 1",
    description: "Visualizar resumen de examenes de la primera semana.",
    day: "20/10/25",
  },
  {
    id: 2,
    title: "Importante",
    description:
      "Examenes muy importantes de las materias fundamentas de la carrera de tecnologia.",
    day: "22/10/25",
  },
  {
    id: 3,
    title: "Refuerzo",
    description:
      "Empiezan los examenes de segunda oportunidad de este semestre.",
    day: "28/10/25",
  },
];

export function EventCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date()
  );

  return (
    <div className="p-4 rounded-md shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="border rounded-md "
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <h1 className="text-xl font-semibold">Eventos</h1>
        <Button
          variant="ghost"
          size="icon"
          className="h-[40px] w-[80px]"
          onClick={() => console.log("Configuración")}
        >
          Ver Mas
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {events.map((event) => (
          <div
            className="p-5 border border-gray-100 rounded-md shadow-md odd:border-lamaSky even:border-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{event.title}</p>
              <span className="px-2 py-1 text-xs text-gray-500 bg-white rounded-md">
                {event.day}
              </span>
            </div>
            <p className="mt-2 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
