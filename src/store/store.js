import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  weather: {},
};

const key = "c5c0570d929f34c36e7e1e9b06fef1ff";

export const fetchWeather = (query) => (dispatch) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${key}`
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(setWeather(data));
    });
};

export const setWeather = (data) => ({
  type: "SET_WEATHER",
  payload: data,
});

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        weather: action.payload,
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
