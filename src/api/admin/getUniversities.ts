import { University } from "@/types/University";
import axios from "axios";

export const getUniversities = async (): Promise<University[]> => {
  try {
    const response = await axios.get(
      `http://161.35.53.140/back/api/getUniversity`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching universities:", error);
    throw new Error("Failed to fetch universities");
  }
};
