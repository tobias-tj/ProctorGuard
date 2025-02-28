import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllAnuncios = async () => {
  try {
    const response = await axios.get(
      `http://161.35.53.140/back/api/getAllAnuncios`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching anunciosList", error);
    throw new Error("Failed to fetch anuncioList");
  }
};
