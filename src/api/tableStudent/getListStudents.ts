import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchStudentListData = async () => {
  try {
    const response = await axios.get(
      `http://161.35.53.140/back/api/getStudentIncident`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Failed to fetch dashboard information");
  }
};
