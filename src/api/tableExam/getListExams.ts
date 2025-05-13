import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

export const fetchExamListData = async (authToken: string) => {
  try {
    const response = await axios.get(
      `https://api.yvagacore.com/back/api/getAllListExamInfo`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching ListExamData", error);
    throw new Error("Failed to fetch ListExamData");
  }
};
