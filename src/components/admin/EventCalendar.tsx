import * as React from "react";
import { Ellipsis } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

// TEMPORARY EVENTS
const events = [
  {
    id: 1,
    title: "Lorep ipsum dsad",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum parsask slai salsmon, ska lol konsa elit.",
  },
  {
    id: 2,
    title: "Lorep ipsum dsad",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum parsask slai salsmon, ska lol konsa elit.",
  },
  {
    id: 3,
    title: "Lorep ipsum dsad",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum parsask slai salsmon, ska lol konsa elit.",
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
        <Ellipsis width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {events.map((event) => (
          <div
            className="p-5 border border-gray-100 rounded-md shadow-md odd:border-lamaSky even:border-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-600">{event.title}</p>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
