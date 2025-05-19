import { logoutGeneral } from "@/utils/logoutGeneral";
import axios from "axios";

export const fetchReportMonthsData = async (authToken: string) => {
  try {
    const response = await axios.get(
      `https://api.yvagacore.com/back/api/getReportMonths`,
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
      console.error("Error en la solicitud Axios:", error.message);
      console.error("URL solicitada:", error.config?.url);
      console.error("Respuesta de error:", error.response?.data);
      if (statusCode === 401) {
        console.error("Token de autenticación no válido o expirado.");
        logoutGeneral();
      } else {
        console.error(
          `Error HTTP ${statusCode} al obtener los meses del reporte.`
        );
      }
    } else {
      console.error("Error inesperado:", error);
    }
    throw new Error("Failed to fetch ReportMonthsData");
  }
};
