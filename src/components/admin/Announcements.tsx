import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

const announcements = [
  {
    title: "Bienvenido a tu dashboard",
    date: "04/10/25",
    content:
      "Consulta el material de ayuda, si necesita alguna informacion adicional.",
  },
  {
    title: "Actualizacion recibida",
    date: "02/08/25",
    content: "Nueva Version 2.0 realizada con exito.",
  },
  {
    title: "Pendiente de pago",
    date: "03/09/25",
    content: "Se esta terminando el saldo de tu cuenta.",
  },
];

const Announcements = () => {
  return (
    <Card className="w-full shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Anuncios
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="h-[40px] w-[80px]"
          onClick={() => console.log("Configuración")}
        >
          Ver Mas
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="p-5 border border-gray-100 rounded-md shadow-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{announcement.title}</h2>
              <span className="px-2 py-1 text-xs text-gray-500 bg-white rounded-md">
                {announcement.date}
              </span>
            </div>
            <p className="mt-2 text-sm">{announcement.content}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Announcements;
