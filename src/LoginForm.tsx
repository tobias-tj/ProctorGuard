import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Input } from "./components/ui/input";
import { useUser } from "@/Context/UserContext";
import { University } from "./types/University";
import { getUniversities } from "./api/admin/getUniversities";
import { loginAdmin } from "./api/admin/loginAdmin";
import { toast } from "./components/ui/toaster";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [selectedUniversityId, setSelectedUniversityId] = useState<
    number | null
  >(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Usamos el context para guardar el usuario
  const { setUser } = useUser();

  // Cargar universidades al montar el componente
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const data = await getUniversities();
        setUniversities(data);
      } catch (error) {
        console.log(error);
        toast.error(
          "Error al cargar las universidades. Por favor, intenta de nuevo más tarde."
        );
      }
    };

    fetchUniversities();
  }, []);

  const handleLogin = async () => {
    if (!selectedUniversityId) {
      toast.error("Por favor selecciona una universidad antes de continuar.");

      return;
    }

    try {
      const loginResponse = await loginAdmin(
        selectedUniversityId,
        email,
        password
      );

      // Aseguramos que los valores sean siempre strings
      const user = {
        userName: loginResponse?.user || "", // Si no hay user, asignamos una cadena vacía
        universityName:
          universities.find((u) => u.iduniversidad === selectedUniversityId)
            ?.nombreuniversidad || "", // Si no hay universidad, asignamos una cadena vacía
      };

      localStorage.setItem("authToken", loginResponse!.token);
      localStorage.setItem("user", JSON.stringify(user));

      // Actualizamos el context directamente
      setUser(user);

      // Llamamos a la función onLogin y redirigimos
      onLogin();
      navigate("/dashboard");
    } catch (err) {
      console.error("Error en login:", err);
      toast.error("Credenciales incorrectas. Por favor verifica.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row">
          {/* Imagen lateral (solo en desktop) */}
          <div
            className="hidden bg-center bg-cover rounded-l-lg md:block md:w-1/2"
            style={{
              backgroundImage: "url('/IMG_1091.JPG')",
              backgroundSize: "80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          {/* Contenido del formulario */}
          <div className="w-full p-6 md:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                ¡Bienvenido!
              </CardTitle>
              <p className="text-sm text-center text-muted-foreground">
                Selecciona tu universidad y accede a tu cuenta.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="university">Universidad</Label>
                  <Select
                    onValueChange={(value) =>
                      setSelectedUniversityId(Number(value))
                    }
                    disabled={loading || universities.length === 0}
                  >
                    <SelectTrigger id="university">
                      <SelectValue placeholder="Selecciona una universidad" />
                    </SelectTrigger>
                    <SelectContent>
                      {universities.map((uni) => (
                        <SelectItem
                          key={uni.iduniversidad}
                          value={uni.iduniversidad.toString()}
                        >
                          {uni.nombreuniversidad}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    placeholder="••••••••"
                  />
                </div>

                <Button
                  onClick={handleLogin}
                  disabled={
                    loading || !selectedUniversityId || !email || !password
                  }
                  className="w-full"
                >
                  {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      <p className="mt-8 text-sm text-muted-foreground">Power By YvagaCore</p>
    </div>
  );
};

export default LoginForm;
