import WeatherCard from "./components/WeatherCard";
import { useWeatherContext } from "./store/WeatherContext";

function App() {
  const { weatherData, getBackgroundImage } = useWeatherContext();

  const backgroundImage = weatherData
    ? `url(${getBackgroundImage(weatherData.weather[0].main)})`
    : "linear-gradient(to right, #4facfe, #00f2fe)";

  return (
    <div
      style={{
        background: `${backgroundImage} center / cover no-repeat`,
      }}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1>Weather App</h1>
      <WeatherCard />
    </div>
  );
}

export default App;
