import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const axios = require("axios").default;

const initialState = {
  weather: {},
  isLoaded: false,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const setWeather = (data) => ({
  type: "SET_WEATHER",
  payload: data,
});

export const setLoadedWeather = (payload) => ({
  type: "SET_LOADED_WEATHER",
  payload,
});

export const fetchWeather = (query) => (dispatch) => {
  setLoadedWeather(false);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=c5c0570d929f34c36e7e1e9b06fef1ff`
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(setWeather(data));
    });
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        weather: action.payload,
      };
    case "SET_LOADED_WEATHER":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(
  weather,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
