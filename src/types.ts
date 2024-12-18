import { ReactNode } from "react";

export type WeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number; // Optional because not all responses may include it
    grnd_level?: number; // Optional for the same reason
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number; // Optional as it may not always be present
  };
  rain?: {
    "1h"?: number; // Optional because rain data might not always be included
    "3h"?: number; // Potentially present in extended forecasts
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type?: number; // Optional as not all APIs include this
    id?: number; // Optional for the same reason
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type WeatherContextType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  weatherData: WeatherResponse | null;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error: string | null;
  getWeatherIconUrl: (icon: string) => string;
  getBackgroundImage: (main: string) => string;
  kelvinToCelsius: (kelvin: number) => number;
};

export type WeatherProviderProps = {
  children: ReactNode;
};
