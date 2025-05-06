import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { fetchAllAnuncios } from "@/api/announcement/getAllAnuncios";
import { useNavigate } from "react-router-dom";

// Tipo como viene desde la API
interface AnuncioApi {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  visto: boolean;
}

// Tipo para mostrar en el frontend
interface Anuncio {
  title: string;
  date: string;
  content: string;
}

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<Anuncio[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loadAnuncios = async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("Token no disponible. Por favor, inicia sesión.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetchAllAnuncios(token, true);
      const { data }: { data: AnuncioApi[] } = response;

      if (Array.isArray(data)) {
        const mappedData: Anuncio[] = data.map((anuncio) => ({
          title: anuncio.titulo,
          content: anuncio.descripcion,
          date: new Date(anuncio.fecha).toLocaleDateString("es-AR"),
        }));

        setAnnouncements(mappedData);
      } else {
        setError("La respuesta de la API no contiene un array de anuncios.");
      }
    } catch (err) {
      console.error("Error al cargar los anuncios:", err);
      setError("Sin notificaciones.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnuncios();
  }, []);

  return (
    <Card className="flex-1 w-full shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Avisos
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="h-[40px] w-[80px]"
          onClick={() => navigate("/announcement")}
        >
          Ver Mas
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {loading && <div>Cargando...</div>}
        {error && <div className="text-gray-800">{error}</div>}
        {!loading && !error && announcements.length === 0 && (
          <div>No hay anuncios disponibles</div>
        )}
        {!loading &&
          !error &&
          announcements.map((announcement, index) => (
            <div
              key={index}
              className="p-5 border border-gray-100 dark:border-gray-800 rounded-md shadow-md"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-medium">{announcement.title}</h2>
                <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-50 bg-white dark:bg-gray-700 rounded-md">
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