import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchStudentListData = async (authToken: string) => {
  try {
    const response = await axios.get(
      `https://api.yvagacore.com/back/api/getStudentIncident`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Failed to fetch dashboard information");
  }
};
