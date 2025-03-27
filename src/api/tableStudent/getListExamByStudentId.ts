import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchListExamByStudentId = async (
  studentId: number,
  authToken: string
) => {
  try {
    const response = await axios.get(
      `${API_URL}/getIncidentsByStudentId?id=${studentId}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data by student ID:", error);
    throw new Error("Failed to fetch data for the student");
  }
};
