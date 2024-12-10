import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const HelpPage = () => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const handleRequestHelp = () => {
    setIsHelpModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <p className="text-gray-600">
        Esta página está diseñada para ayudarte a entender cómo funciona nuestro
        dashboard y cómo puedes aprovechar sus herramientas para gestionar tus
        exámenes de manera eficiente.
      </p>
      <Separator />

      {/* Resumen del Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle>¿Qué ofrece nuestro Dashboard?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Nuestro dashboard te permite:</p>
          <ul className="ml-6 text-gray-700 list-disc">
            <li>
              Ver un resumen de los exámenes desarrollados con o sin
              incidencias.
            </li>
            <li>
              Visualizar gráficos interactivos sobre el estado actual de los
              exámenes.
            </li>
            <li>
              Descargar reportes en formato PDF de las incidencias encontradas,
              vinculadas a cada estudiante.
            </li>
            <li>
              Gestionar datos de estudiantes, incidencias y reportes desde una
              interfaz intuitiva.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Screenshots */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Capturas de pantalla</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Pantalla Principal</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/pantallaHome.png"
                alt="Pantalla Principal"
                className="rounded-lg shadow-md"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gráficos de Incidencias</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/pantallaGraf.png"
                alt="Gráficos de Incidencias"
                className="rounded-lg shadow-md"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reporte en PDF</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/pantallaExam.png"
                alt="Reporte PDF"
                className="rounded-lg shadow-md"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Solicitar Ayuda */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">¿Necesitas más ayuda?</h2>
        <p className="text-gray-600">
          Si necesitas asistencia adicional, puedes ponerte en contacto con
          nuestro equipo de soporte.
        </p>
        <Button onClick={handleRequestHelp}>Solicitar Ayuda</Button>
      </div>

      {/* Modal de Ayuda */}
      <Dialog open={isHelpModalOpen} onOpenChange={setIsHelpModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solicitar Ayuda</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">
              Por favor, completa el formulario para que podamos ayudarte.
            </p>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tu Correo Electrónico
              </label>
              <Input type="email" placeholder="tucorreo@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <Textarea placeholder="Describe tu problema o pregunta" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button>Enviar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HelpPage;
