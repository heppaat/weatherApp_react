import { useWeatherContext } from "../store/WeatherContext";

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          className="border-2"
        />
        <button type="submit">Click</button>
      </form>
    </>
  );
};

export default WeatherCard;
