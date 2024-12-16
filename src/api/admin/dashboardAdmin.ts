import axios from "axios";

const API_URL = "http://localhost:3000/api/getAllStudentsCount";

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Failed to fetch dashboard information");
  }
};
