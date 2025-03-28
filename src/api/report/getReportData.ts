import { ReportInfo } from "@/types/ReportInfo";
import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchReportDataByIdRelation = async (
  idrelacion: string,
  authToken: string
): Promise<ReportInfo[]> => {
  try {
    const response = await axios.get(
      `http://161.35.53.140/back/api/generateReportByIdRelation?idrelacion=${idrelacion}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching reports data:", error);
    throw new Error("Failed to fetch reports information");
  }
};
