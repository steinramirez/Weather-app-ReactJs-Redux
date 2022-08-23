import { GET_WEATHER } from "./Constants";
import axios from "axios";
import { BASE_URL } from "../api/api";
import { toast } from "react-toastify";

export const GetWeatherDetails = ( location ="Paris", lang= 'en') => async dispatch => {
  dispatch({ type: GET_WEATHER.PENDING });
  axios
    .get(BASE_URL, {
      params: {
        q: location,
        lang: lang,
        units: "Metric",
        
      }
    })
    .then(response =>
      dispatch({ type: GET_WEATHER.SUCCESS, payload: response.data })
    )
    .catch(err => {
      console.log(err.response, err);
      toast.error(err.response.data.message, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false
      });
      dispatch({ type: GET_WEATHER.REJECTED, payload: err.response });
    });
};
