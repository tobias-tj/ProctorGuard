import axios from "axios";

export const fetchDashboardData = async (authToken: string) => {
  try {
    const response = await axios.get(
      `http://161.35.53.140/back/api/getAllStudentsCount`,
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

export const fetchDashboardExamTotalCount = async (authToken: string) => {
  try {
    const response = await axios.get(
      `http://161.35.53.140/back/api/getAllTotalExamCount`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
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
