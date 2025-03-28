import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchExamListData = async (authToken: string) => {
  try {
    const response = await axios.get(`${API_URL}/getAllListExamInfo`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching ListExamData", error);
    throw new Error("Failed to fetch ListExamData");
  }
};
