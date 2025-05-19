import { logoutGeneral } from "@/utils/logoutGeneral";
import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllAnuncios = async (
  authToken: string,
  onlyUnread: boolean
) => {
  try {
    const response = await axios.get(
      `https://api.yvagacore.com/back/api/getAllAnuncios?onlyUnread=${onlyUnread}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
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
      }
    } else {
      console.error("Error inesperado:", error);
    }
    throw new Error("Failed to fetch anuncioList");
  }
};
