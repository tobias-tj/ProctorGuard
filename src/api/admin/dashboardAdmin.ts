import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllStudentsCount`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Failed to fetch dashboard information");
  }
};

export const fetchDashboardExamTotalCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllTotalExamCount`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching exam dashboard count:", error);
    throw new Error("Failed to fetch dashboard information");
  }
};

// export const fetchDashboardExamCleanCount = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/getExamClean`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching exam total count:", error);
//     throw new Error("Failed to fetch dashboard information");
//   }
// };

// export const fetchDashboardExamIncidentCount = async () => {
//   try {
//     const response = await axios.get(
//       `${API_URL}/getExamIncident?countOnly=true`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching exam total count:", error);
//     throw new Error("Failed to fetch dashboard information");
//   }
// };
