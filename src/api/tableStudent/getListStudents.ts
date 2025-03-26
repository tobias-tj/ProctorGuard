import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchStudentListData = async () => {
  try {
    const response = await axios.get(`${API_URL}/getStudentIncident`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Failed to fetch dashboard information");
  }
};
