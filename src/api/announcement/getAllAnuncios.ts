import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllAnuncios = async (authToken: string) => {
  try {
    const response = await axios.get(
      `https://api.yvagacore.com/back/api/getAllAnuncios`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching anunciosList", error);
    throw new Error("Failed to fetch anuncioList");
  }
};
