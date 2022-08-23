# Weather Forecast App
This app was made on REACTJS + REDUX method using Hooks. Weather app does weather forecast by city and countries, using https://openweathermap.org/api and Current Weather Data Docs. Feature : change language "english and spanish".

# DATA

Weather app data gets ( actual day , month and year ), City Name, Weather Icon, grades on Celsius, Weather description, min and max temp. Gives to the user complete info about actual Weather Forecast.

# hooks used on Weather App

Hook used : function ;
react-i8next and i18next : app text translation  ;
axios : method to request data ;
moment : method to request and format actual date;
redux : used as format to work with states;
react-redux-devtools-extension: the extension provides power-ups for your Redux development workflow;
react-toastify : used for pop up error notification;
redux-thunk : it's middleware that allows you to write action creators that return a function instead of an action;
typescript : is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale;
API :  https://openweathermap.org/api ;

# How to use WeatherApp

You can get Weather Forecast from any city in the world, click the city you want to consult in this case "New York, Madrid and Hong Kong then submit, or type in the input the city you need. When you decide to sumbit the city you want, you will get the CityName and (country), the icon describing the actual weather, actual grades on celsius, description text, actual min and max temp.

At the Header you will find two buttons made for change app language. i18next was used for this mission.

# API_KEY

You can get your own api key at https://openweathermap.org/api but there is not need to do it. It's already configured at './api/api.js' identified as API_KEY = `c1052c573e4cd4c3fbe648d26b2a4c34`; feel free to change it.

# conclusion

Reactjs and redux are a perfect combination to store and setStates on apps. I can recommend it as a main framework to develop scalable apps.

# run this project on localhost

clone this repository and start it using 'npm start'.

# contact 

steinra939@gmail.com
made by Stein Ramirez 



# Issues

weather[0].description is the only text that is not changing language, result is not changing language 




