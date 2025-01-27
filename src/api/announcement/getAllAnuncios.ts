import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const fetchAllAnuncios = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllAnuncios`);
    return response.data;
  } catch (error) {
    console.log("Error fetching anunciosList", error);
    throw new Error("Failed to fetch anuncioList");
  }
};
