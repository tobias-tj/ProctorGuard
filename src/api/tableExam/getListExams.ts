import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchExamListData = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllListExamInfo`);
    return response.data;
  } catch (error) {
    console.log("Error fetching ListExamData", error);
    throw new Error("Failed to fetch ListExamData");
  }
};
