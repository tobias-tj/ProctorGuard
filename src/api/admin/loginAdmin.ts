import { LoginData } from "@/types/LoginData";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginAdmin = async (
  idUniversidad: number,
  email: string,
  password: string
): Promise<LoginData | undefined> => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, {
      idUniversidad,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error Login:", error);
    throw new Error("Failed to Login");
  }
};
