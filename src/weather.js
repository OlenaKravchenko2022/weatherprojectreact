import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(true);
  let [icon, setIcon] = useState(true);
  let [wind, setWind] = useState(true);

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="search" />

      <div>
        <h2>Last updated: Sunday 19:00</h2>
        <h2>Light rain</h2>
      </div>
    </form>
  );

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setWind(response.data.wind.speed);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80ac2935dbe51b68bf72767b13c74d44&&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  if (Weather) {
    return (
      <div className="Weather">
        {form}
        <h1> {city}:</h1>
        <ul>
          <li>Temperature:{Math.round(temperature)}</li>
          <li>Description: {description}</li>
          <li>Humidity:{Math.round(humidity)}</li>
          <li>Wind:{Math.round(wind)} km/h</li>
          <li>
            <img src={icon} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
