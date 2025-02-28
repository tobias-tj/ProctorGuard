import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchListStudentByExamId = async (examId: number) => {
  try {
    // Concatenamos el examId en la URL correctamente
    const response = await axios.get(
      `http://161.35.53.140/back/api/getExamIncidentByUserId/${examId}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by examID:", error);
    throw new Error("Failed to fetch data by examID");
  }
};
