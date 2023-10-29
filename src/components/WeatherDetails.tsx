export const WeatherDetails = ({ apiData }: any) => {
  console.log(apiData);
  const details = [
    `Feels Like: ${Math.round(apiData?.main?.feels_like)}`,
    `Humidity: ${apiData?.main?.humidity}`,
    `Wind Speed: ${apiData?.wind?.speed}`,
  ];
  return (
    <div className="weather ">
      <div>
        <h1>{apiData?.name}</h1>
      </div>
      <div className="temperature">{Math.round(apiData.main.temp)}°C</div>
      <div className="img">
        <img
          src={`https://openweathermap.org/img/wn/${apiData?.weather[0].icon}.png`}
          alt=""
        />
      </div>
      <div className="details">
        <div className="detail"> {details[0]}</div>
        <div className="detail"> {details[1]}</div>
        <div className="detail"> {details[2]}</div>
      </div>
    </div>
  );
};
