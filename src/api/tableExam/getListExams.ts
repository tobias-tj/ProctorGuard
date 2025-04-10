import { logoutGeneral } from "@/utils/logoutGeneral";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchExamListData = async (authToken: string) => {
  try {
    const response = await axios.get(`${API_URL}/getAllListExamInfo`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
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
    throw new Error("Failed to fetch ListExamData");
  }
};
