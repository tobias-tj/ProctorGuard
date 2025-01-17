import { ReportInfo } from "@/types/ReportInfo";
import axios from "axios";

const API_URL = "http://localhost:3000/api/generateReportByIdRelation";

export const fetchReportDataByIdRelation = async (
  idrelacion: string
): Promise<ReportInfo[]> => {
  try {
    const response = await axios.get(`${API_URL}?idrelacion=${idrelacion}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching reports data:", error);
    throw new Error("Failed to fetch reports information");
  }
};
