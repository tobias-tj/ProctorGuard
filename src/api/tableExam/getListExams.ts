import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const fetchExamListData = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllListExamInfo`);
    return response.data;
  } catch (error) {
    console.log("Error fetching ListExamData", error);
    throw new Error("Failed to fetch ListExamData");
  }
};
