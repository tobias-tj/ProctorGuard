import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const updateAnuncio = async (id: number) => {
  try {
    const response = await axios.patch(`${API_URL}/updateStatusAnuncio`, {
      id,
    });
    return response.data;
  } catch (error) {
    console.log("Error updateAnuncio", error);
    throw new Error("Failed to updateANuncio");
  }
};
