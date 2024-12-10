import { WeatherResponse } from "../types";

const API_BASE_URL: string = "https://api.openweathermap.org";
const API_KEY: string = import.meta.env.VITE_API_KEY;

export const fetchData = async (city: string): Promise<WeatherResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const data = await response.json();

    return data as WeatherResponse;
  } catch (error) {
    console.error("Failed to fetch data", error);
    throw error;
  }
};
