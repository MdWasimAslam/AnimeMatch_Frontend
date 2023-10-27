import axios from "axios";
import baseUrl from "./baseUrl";
export async function getAllAnime(serial) {
  try {
    const response = await axios.get(`${baseUrl}/getAllData`);
    // Handle the response data here if needed
    return response.data;
  } catch (error) {
    // Handle errors, e.g., log the error or throw it further.
    throw error;
  }
}
