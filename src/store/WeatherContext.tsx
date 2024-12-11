import { createContext, useContext, useState } from "react";
import {
  WeatherResponse,
  WeatherContextType,
  WeatherProviderProps,
} from "../types";
import { fetchData } from "../services/Api";

const BASE_WEATHER_ICON_URL = `https://openweathermap.org/img/wn`;

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = await fetchData(city);
      setWeatherData(data);
    } catch (error) {
      setError(
        (error as Error).message ||
          "Unable to fetch weather data. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getWeatherIconUrl = (icon: string) => {
    const validIcons = [
      "01d",
      "01n",
      "02d",
      "02n",
      "03d",
      "03n",
      "04d",
      "04n",
      "09d",
      "09n",
      "10d",
      "10n",
      "11d",
      "11n",
      "13d",
      "13n",
      "50d",
      "50n",
    ];
    return validIcons.includes(icon)
      ? `${BASE_WEATHER_ICON_URL}/${icon}@2x.png`
      : icon;
  };

  const getBackgroundImage = (main: string) => {
    const weatherCondition: Record<string, string> = {
      Rain: "rain.png",
      Mist: "mist.png",
      Haze: "mist.png",
      Fog: "mist.png",
      Thunderstorm: "thunderstorm.png",
      Snow: "snow.png",
      Clouds: "clouds.png",
      Clear: "clear_sky.png",
      Dust: "atmosphere.png",
      Smoke: "atmosphere.png",
      Sand: "atmosphere.png",
      Ash: "atmosphere.png",
      Squall: "atmosphere.png",
    };
    return weatherCondition[main] || "clear_sky.png";
  };

  const value: WeatherContextType = {
    city,
    setCity,
    weatherData,
    handleSubmit,
    isLoading,
    error,
    getWeatherIconUrl,
    getBackgroundImage,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
