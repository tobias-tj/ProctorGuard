import { Ellipsis } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// TEMPORARY
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
const EventCalendar = () => {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Eventos</h1>
        <Ellipsis width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
