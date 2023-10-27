import axios from "axios";
import baseUrl from "./baseUrl";
// const baseUrl = "http://localhost:8080"
export async function getAnime(serial) {
  try {
    const response = await axios.post(`${baseUrl}/getAnime`, {
      serial: serial
    });
    // Handle the response data here if needed
    return response.data;
  } catch (error) {
    // Handle errors, e.g., log the error or throw it further.
    throw error;
  }
}
