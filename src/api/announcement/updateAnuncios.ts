import { logoutGeneral } from "@/utils/logoutGeneral";
import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const updateAnuncio = async (id: number, authToken: string) => {
  try {
    const response = await axios.patch(
      `https://api.yvagacore.com/back/api/updateStatusAnuncio`,
      {
        id,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
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
    throw new Error("Failed to updateANuncio");
  }
};
