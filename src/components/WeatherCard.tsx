import { useWeatherContext } from "../store/WeatherContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const WeatherCard = () => {
  const {
    city,
    setCity,
    weatherData,
    handleSubmit,
    isLoading,
    error,
    getWeatherIconUrl,
  } = useWeatherContext();

  return (
    <Card className="max-w-md mx-auto shadow-lg border rounded-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Weather Search
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className={`w-full px-4 py-2 bg-blue-500 text-white rounded-md ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </form>

        {/* Display error if any */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Display weather data if available */}
        {weatherData && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-center">
              <img
                src={getWeatherIconUrl(weatherData.weather[0].icon)}
                alt={weatherData.weather[0].description}
                className="w-16 h-16"
              />
            </div>
            <p className="text-center text-xl font-semibold">
              {weatherData.name}
            </p>
            <p className="text-center text-lg">
              Temperature: {weatherData.main.temp.toFixed(1)}°C
            </p>
            <p className="text-center text-lg">
              {weatherData.weather[0].description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
