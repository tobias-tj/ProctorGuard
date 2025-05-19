import { fetchAllAnuncios } from "@/api/announcement/getAllAnuncios";
import { updateAnuncio } from "@/api/announcement/updateAnuncios";
import { Anuncio } from "@/types/Anuncio";
import { useEffect, useState } from "react";

export const useAnuncioListData = () => {
  const [anuncioListData, setAnuncioListData] = useState<Anuncio[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const authToken = localStorage.getItem("authToken") || "NULL-TOKEN";
        const response = await fetchAllAnuncios(authToken, false);

        // Verifica que la respuesta tenga la propiedad `data` y sea un array
        if (response && Array.isArray(response.data)) {
          setAnuncioListData(response.data);
        } else {
          setAnuncioListData([]); // Si no tiene `data` o no es un array, asignar un array vacío
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateAnuncioStatus = async (id: number) => {
    try {
      const authToken = localStorage.getItem("authToken") || "NULL-TOKEN";
      // Actualiza el estado del anuncio en el backend
      await updateAnuncio(id, authToken);

      // Después de la actualización, recarga la lista de anuncios
      const response = await fetchAllAnuncios(authToken, false);
      if (response && Array.isArray(response.data)) {
        setAnuncioListData(response.data);
      }
    } catch (err) {
      console.log("Error updating anuncio status:", err);
      setError("Failed to update anuncio");
    }
  };

  return { anuncioListData, loading, error, updateAnuncioStatus };
};
