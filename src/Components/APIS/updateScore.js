// {
// 	"key":"zxaio8mgy1ev",
// 	"serial":"12"
// }

import axios from "axios";
import baseUrl from "./baseUrl";
// const baseUrl = "http://localhost:8080"
export async function updateScore(serial,key) {
  try {
    const response = await axios.post(`${baseUrl}/addNewScore`, {
      serial: serial,
      key: key
    });
    // Handle the response data here if needed
    return response.data;
  } catch (error) {
    // Handle errors, e.g., log the error or throw it further.
    throw error;
  }
}
