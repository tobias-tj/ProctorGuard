import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "./api/admin/loginAdmin";
import { University } from "./types/University";
import { getUniversities } from "./api/admin/getUniversities";
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
import { Alert, AlertDescription } from "./components/ui/alert";

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
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Cargar universidades al montar el componente
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const data = await getUniversities();
        setUniversities(data);
      } catch (error) {
        console.log(error);
        setError("Error al cargar las universidades");
      }
    };

    fetchUniversities();
  }, []);

  const handleLogin = async () => {
    if (!selectedUniversityId) {
      setError("Por favor selecciona una universidad");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const loginResponse = await loginAdmin(
        selectedUniversityId,
        email,
        password
      );

      localStorage.setItem("authToken", loginResponse!.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          userName: loginResponse?.user,
          universityName: universities.find(
            (u) => u.iduniversidad === selectedUniversityId
          )?.nombreuniversidad,
        })
      );

      onLogin();
      navigate("/dashboard");
    } catch (err) {
      console.error("Error en login:", err);
      setError("Credenciales incorrectas. Por favor verifica.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Imagen lateral (solo en desktop) */}
          <div
            className="hidden bg-center bg-cover rounded-l-lg md:block md:w-1/2"
            style={{ backgroundImage: "url('/IMG_1091.JPG')" }}
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
                {/* Select de Universidad */}
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

                {/* Campo de Email */}
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

                {/* Campo de Contraseña */}
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

                {/* Mensaje de error */}
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {/* Botón de Login */}
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

      {/* Footer */}
      <p className="mt-8 text-sm text-muted-foreground">Power By YvagaCore</p>
    </div>
  );
};

export default LoginForm;
