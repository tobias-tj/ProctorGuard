import { University } from "@/types/University";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getUniversities = async (): Promise<University[]> => {
  try {
    const response = await axios.get(`${API_URL}/admin/getUniversity`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching universities:", error);
    throw new Error("Failed to fetch universities");
  }
};
