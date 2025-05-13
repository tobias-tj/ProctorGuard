import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchListStudentByExamId = async (
  examId: number,
  authToken: string
) => {
  try {
    // Concatenamos el examId en la URL correctamente
    const response = await axios.get(
      `https://api.yvagacore.com/back/api/getExamIncidentByUserId/${examId}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by examID:", error);
    throw new Error("Failed to fetch data by examID");
  }
};
