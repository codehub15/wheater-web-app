import React, { useState } from 'react';
import logo from './sun.svg';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false)
  const [errMessage, setErrMessage] = useState("")

  const fetchData = () => {
    fetch(`https:/api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(res1 => {
        if (!Object.keys(res1).includes("main")) {
          setErrMessage(res1.message);
          setErr(true);
          setLoading(false)
          console.log(err, errMessage)
        } else {
          setData(res1);
          setLoading(true)
          setErr(false);
        }
      })
  };

  const getData = (e) => {
    e.preventDefault();
    fetchData();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather App</h1>
      </header>

      <form onSubmit={getData}>
        <input type="text" onChange={e => setCity(e.target.value)} autoFocus placeholder="type the city here..." />
        <button type="submit" className="searchBtn">search</button>
      </form>

      <div className="weather-content">
        {err ? errMessage : (<>
          <h2>City: {city} </h2>
          <div className="info"><p>Current temperature:</p> <span className="bold"> {loading ? data.main.temp : null} °C </span></div>
          <div className="info"><p>Max temperature:</p> <span className="bold"> {loading ? data.main.temp_max : null} °C </span></div>
          <div className="info"><p>Min temperature:</p> <span className="bold"> {loading ? data.main.temp_min : null} °C</span></div>
          <div className="info"><p>Humidity:</p> <span className="bold"> {loading ? data.main.humidity : null} % </span></div>
          <div className="info"><p>Weather description:</p> <span className="bold"> {loading ? data.weather[0].description : null} </span></div>
          <div className="info"><p>Wind deg:</p> <span className="bold"> {loading ? data.wind.deg : null} </span></div>
          <div className="info"><p>Wind speed:</p> <span className="bold"> {loading ? data.wind.speed : null} </span></div>
        </>)
        }
      </div>
    </div>
  );
}

export default App;
