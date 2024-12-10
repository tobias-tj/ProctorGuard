import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as ShadCalendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string; // Formato ISO
}

const EventPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleAddEvent = () => {
    if (selectedDate && formData.title) {
      const newEvent: Event = {
        id: events.length + 1,
        title: formData.title,
        description: formData.description,
        date: selectedDate.toISOString(),
      };
      setEvents((prev) => [...prev, newEvent]);
      setShowModal(false);
      setFormData({ title: "", description: "" });
    }
  };

  const handleDoubleClick = (date: Date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  return (
    <div className="w-full h-full p-6 space-y-6">
      <h1 className="text-2xl font-bold">Calendario de Eventos</h1>
      <ShadCalendar
        mode="single"
        onSelect={(date) => setSelectedDate(date)}
        onDayClick={(date) => handleDoubleClick(date)}
        className="border rounded-lg shadow-lg "
      />
      <div className="mt-6 ">
        <h2 className="text-xl font-semibold">Eventos</h2>
        <ul className="space-y-4 ">
          {events.map(({ id, title, description, date }) => (
            <li
              key={id}
              className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md"
            >
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm text-gray-600">
                {format(new Date(date), "PPpp")}
              </p>
              <p className="text-gray-800">{description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Agregar Evento</DialogTitle>
            <DialogDescription>
              Agrega un evento para el día seleccionado:{" "}
              {selectedDate && format(selectedDate, "PP")}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Título"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <Textarea
              placeholder="Descripción"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button onClick={handleAddEvent}>Agregar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventPage;
