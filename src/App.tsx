import WeatherCard from "./components/WeatherCard";
import { useWeatherContext } from "./store/WeatherContext";

function App() {
  const { weatherData, getBackgroundImage } = useWeatherContext();

  const backgroundImage = weatherData
    ? `url(${getBackgroundImage(weatherData.weather[0].main)})`
    : "linear-gradient(to right, #4F79B0, #4FA9B0)";

  return (
    <div
      style={{
        background: `${backgroundImage} center / cover no-repeat`,
      }}
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <h1 className="font-sans font-bold text-5xl absolute top-40 text-[#ffffff] text-center">
        Weather App
      </h1>
      <WeatherCard />
    </div>
  );
}

export default App;
