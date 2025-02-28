import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const updateAnuncio = async (id: number) => {
  try {
    const response = await axios.patch(
      `http://161.35.53.140/back/api/updateStatusAnuncio`,
      {
        id,
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error updateAnuncio", error);
    throw new Error("Failed to updateANuncio");
  }
};
