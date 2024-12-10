import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AccountPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [userData, setUserData] = useState({
    university: "Universidad Nacional de Asunción",
    fullName: "Tobias Jara",
    idCard: "1234567",
    email: "tobias.jara@example.com",
    phone: "+595 123 456 789",
    address: "Fernando de la Mora, Central, Paraguay",
  });

  const [formData, setFormData] = useState(userData);

  // Detectar cambios
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsChanged(true); // Detecta cambios
  };

  // Guardar todo
  const saveAllChanges = () => {
    setUserData(formData);
    setIsChanged(false);
    setIsEditable(false);
  };

  // Cambiar foto de perfil
  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePicture(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 space-y-6 lg:w-[900px] sm:w-[400px]">
      <Card>
        <CardHeader>
          <CardTitle>Información del Cliente</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-6">
            <Avatar className="w-20 h-20">
              {profilePicture ? (
                <AvatarImage src={profilePicture} alt="Foto de perfil" />
              ) : (
                <AvatarFallback>TJ</AvatarFallback>
              )}
            </Avatar>
            <div>
              <Label className="mb-2">Actualizar Foto de Perfil</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="file:mr-2 file:py-1 file:px-2 file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Universidad</Label>
              <Input
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>
            <div>
              <Label>Nombre Completo</Label>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>
            <div>
              <Label>Cédula de Identidad</Label>
              <Input
                name="idCard"
                value={formData.idCard}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>
            <div>
              <Label>Correo Electrónico</Label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>
            <div>
              <Label>Teléfono</Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>
            <div>
              <Label>Dirección</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            {/* Botón de Editar */}
            <Button
              variant="default"
              onClick={() => setIsEditable(true)}
              disabled={isEditable}
            >
              Editar
            </Button>

            {/* Botón de Guardar Todo */}
            <Button
              variant="default"
              onClick={saveAllChanges}
              disabled={!isChanged}
            >
              Guardar Todo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Modal para cambiar contraseña */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cambiar Contraseña</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Nueva Contraseña</Label>
              <Input
                type="password"
                placeholder="Ingrese su nueva contraseña"
              />
            </div>
            <div>
              <Label>Confirmar Contraseña</Label>
              <Input
                type="password"
                placeholder="Confirme su nueva contraseña"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <Button
              variant="outline"
              onClick={() => setShowPasswordDialog(false)}
            >
              Cancelar
            </Button>
            <Button>Cambiar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccountPage;
