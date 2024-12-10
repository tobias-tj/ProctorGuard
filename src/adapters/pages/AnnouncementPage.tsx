import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const initialAnnouncements = [
  {
    id: 1,
    title: "Bienvenido a tu dashboard",
    date: "04/10/25",
    message:
      "Consulta el material de ayuda, si necesita alguna información adicional.",
    read: false,
  },
  {
    id: 2,
    title: "Actualización recibida",
    date: "02/08/25",
    message: "Nueva Versión 2.0 realizada con éxito.",
    read: false,
  },
  {
    id: 3,
    title: "Pendiente de pago",
    date: "03/09/25",
    message: "Se está terminando el saldo de tu cuenta.",
    read: false,
  },
];

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  const markAsRead = (id: number) => {
    setAnnouncements((prev) =>
      prev.map((announcement) =>
        announcement.id === id ? { ...announcement, read: true } : announcement
      )
    );
  };

  const deleteAnnouncement = (id: number) => {
    setAnnouncements((prev) =>
      prev.filter((announcement) => announcement.id !== id)
    );
  };

  return (
    <div className="h-full p-4 space-y-4 lg:w-[900px] sm:w-[400px]">
      <div className="space-y-4">
        {announcements.map(({ id, title, date, message, read }) => (
          <Card
            key={id}
            className={`transition-all ${read ? "opacity-50" : ""}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{title}</span>
                <span className="text-sm text-gray-500">{date}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{message}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              {!read ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => markAsRead(id)}
                >
                  Marcar como leído
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => deleteAnnouncement(id)}
                >
                  <Trash className="w-4 h-4 mr-2" /> Eliminar
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementPage;
