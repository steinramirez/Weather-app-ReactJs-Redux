import React from "react";
import "./App.css";
import Weather from "./api/Weather";
import { Provider } from "react-redux";
import WeatherStore from "./reducers/Store";
const current = new Date();
const App = () => {
  
  return (
    <Provider store={WeatherStore}>
      <div className="App">
        <Weather />
        <div className="footer">Weather App . Stein Ramirez   {current.getDate()}/
          {current.getMonth() + 1}/ 
          {current.getFullYear()} <></> 
          {current.getHours()}:
          {current.getMinutes()}:
          {current.getSeconds()}</div>
      </div>
      
    </Provider>
  );
};

export default App;

