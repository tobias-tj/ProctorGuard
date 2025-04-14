import { logoutGeneral } from "@/utils/logoutGeneral";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllAnuncios = async (authToken: string, onlyUnread: boolean) => {
  try {
    // Construi la URL con el parámetro onlyUnread si es necesario
    const url = `${API_URL}/getAllAnuncios?onlyUnread=${onlyUnread}`;
    
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Validación de la respuesta
    if (response.data && Array.isArray(response.data.data)) {
      return response.data;
    } else {
      throw new Error("La respuesta no contiene los datos esperados.");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      if (statusCode === 401) {
        console.error("Token de autenticación no válido o expirado.");
        logoutGeneral();
      } else {
        console.error("Error al obtener anuncios:", error.response?.data);
      }
    } else {
      console.error("Error inesperado:", error);
    }
    throw new Error("Failed to fetch anuncioList");
  }
};
