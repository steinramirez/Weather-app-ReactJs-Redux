import React from "react";
import "./App.css";
import Weather from "./api/Weather";
import { Provider } from "react-redux";
import WeatherStore from "./reducers/Store";
const App = () => {

  return (
    <Provider store={WeatherStore}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
  );
};

export default App;

