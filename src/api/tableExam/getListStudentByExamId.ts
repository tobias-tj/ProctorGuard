import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const fetchListStudentByExamId = async (examId: number) => {
  try {
    // Concatenamos el examId en la URL correctamente
    const response = await axios.get(
      `${API_URL}/getExamIncidentByUserId/${examId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data by examID:", error);
    throw new Error("Failed to fetch data by examID");
  }
};
