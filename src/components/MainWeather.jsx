import "../style/mainweather.css"
import  { useState } from "react";
import { fetchWeather } from '../store/store'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import Week from "./Week";
import TodayCard from "./TodayCard";
import Date from "./Date";
import LeftBar from "./LeftBar";

const MainWeather = () => {
  const weather = useSelector(({ weather }) => weather);
  const dispatch = useDispatch();
  const [query, setQuery] = useState(""); //input

  const fetchweather = () => {
    dispatch(fetchWeather(query));
  }
    return (
          <>
            <div className="app">               
                 
 
                <div className="main">
                    <div className="main-container">
                        <input 
                            type="text" 
                            className="main-input" 
                            placeholder="Search..." 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        /> 
                        <button onClick={fetchweather}>Search</button>
                      
                    {typeof weather.list != "undefined" ?
                      <>
                          <LeftBar />
                      </> 
                      : <></> }
                          <Date />
                      </div>
                </div>

                <div className="week-box">
                  <h1>Week</h1>

                {typeof weather.list != "undefined" ?
                <>
                  <Week />
                  <TodayCard />
                </> : <></>}

                </div>

              </div>
            </>
    )
}

export default MainWeather
