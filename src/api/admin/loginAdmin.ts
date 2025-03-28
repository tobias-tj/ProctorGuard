import { LoginData } from "@/types/LoginData";
import axios from "axios";

export const loginAdmin = async (
  idUniversidad: number,
  email: string,
  password: string
): Promise<LoginData | undefined> => {
  try {
    const response = await axios.post(
      `http://161.35.53.140/back/api/admin/login`,
      {
        idUniversidad,
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Login:", error);
    throw new Error("Failed to Login");
  }
};
