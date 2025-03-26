import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Fijarse si conviene traer todos los examenes que tengan que ver con este alumno sin importar si tiene o no incidencias
export const fetchListExamByStudentId = async (studentId: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/getIncidentsByStudentId?id=${studentId}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data by student ID:", error);
    throw new Error("Failed to fetch data for the student");
  }
};
