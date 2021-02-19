import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("");
  const [state, setState] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (e) => {
    setGetState(e.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };
  return (
    <div className="App">
      {console.log(apiData)}
    <header className="d-flex justify-content-center align-items-center">
      <h2>React Weather App</h2>
    </header>
    </div>
    
  );
}

export default App;
