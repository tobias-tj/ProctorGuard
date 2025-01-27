import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAnuncioListData } from "@/hooks/useAnuncio";

const AnnouncementPage = () => {
  const { anuncioListData, loading, error, updateAnuncioStatus } =
    useAnuncioListData();

  const markAsRead = (id: number) => {
    updateAnuncioStatus(id);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-primary">
          Cargando anuncios...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-500">
          Ocurrió un error al cargar los anuncios: {error}
        </p>
      </div>
    );
  }

  if (!Array.isArray(anuncioListData) || anuncioListData.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-500">
          No hay anuncios disponibles.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full p-4 space-y-4 lg:w-[900px] sm:w-[400px]">
      <div className="space-y-4">
        {anuncioListData.map(({ id, titulo, fecha, descripcion, visto }) => (
          <Card
            key={id}
            className={`transition-all ${visto ? "opacity-50" : ""}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{titulo}</span>
                <span className="text-sm text-gray-500">
                  {new Date(fecha).toLocaleDateString()}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{descripcion}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => markAsRead(id)}
              >
                Marcar como leído
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementPage;
