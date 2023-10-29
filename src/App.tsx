import { useState } from "react";
import "./App.css";
import spinner from "./spinner.svg";
import { Form } from "./components/Form";
import { WeatherDetails } from "./components/WeatherDetails";
function App() {
  const [apiData, setApiData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const apiKey = "22cd618edaed81571c89947112629a0f";

  const getApi = async (cityName: string) => {
    setIsLoading(!isLoading);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    setApiData(data);
    setIsLoading(false);
  };

  return (
    <>
      <div className="container">
        <h1>How is the Weather in today?</h1>
        <Form cityNameCb={getApi} />
        {isLoading ? (
          <div>
            <img src={spinner} alt="" />
          </div>
        ) : apiData?.main ? (
          <WeatherDetails apiData={apiData} />
        ) : (
          <div className="error">{apiData?.message}</div>
        )}
      </div>
    </>
  );
}

export default App;
