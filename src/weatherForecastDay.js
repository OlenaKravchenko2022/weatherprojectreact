import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={52} />
      </div>

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>
      </div>
    </div>
  );
}
