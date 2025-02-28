import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchExamListData = async () => {
  try {
    const response = await axios.get(
      `http://161.35.53.140/back/api/getAllListExamInfo`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching ListExamData", error);
    throw new Error("Failed to fetch ListExamData");
  }
};
