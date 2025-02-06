import { ReportInfo } from "@/types/ReportInfo";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchReportDataByIdRelation = async (
  idrelacion: string
): Promise<ReportInfo[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/generateReportByIdRelation?idrelacion=${idrelacion}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching reports data:", error);
    throw new Error("Failed to fetch reports information");
  }
};
