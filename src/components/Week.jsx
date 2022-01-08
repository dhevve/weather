
import { useSelector } from 'react-redux';

const Week = () => {
    const weather = useSelector(({ weather }) => weather);
    return (
        <>
         {typeof weather.list != "undefined" ?
                <>
                  <div className="week-card">
                    <div className="card">
                      <div className="card-date">{weather.list[9].dt_txt}</div>
                      <div className="card-img"><img src={`http://openweathermap.org/img/wn/${weather.list[9].weather[0].icon}@2x.png`} alt="альтернативный текст"/></div>
                      <div className="card-temp">{Math.round(weather.list[9].main.temp_max)}° <a>{Math.round(weather.list[9].main.temp_min)}°</a></div>
                    </div>
                    <div className="card">
                      <div className="card-date">{weather.list[17].dt_txt}</div>
                      <div className="card-img"><img src={`http://openweathermap.org/img/wn/${weather.list[17].weather[0].icon}@2x.png`} alt="альтернативный текст"/></div>
                      <div className="card-temp">{Math.round(weather.list[17].main.temp_max)}° <a>{Math.round(weather.list[17].main.temp_min)}°</a></div>
                    </div>
                    <div className="card">
                      <div className="card-date">{weather.list[25].dt_txt}</div>
                      <div className="card-img"><img src={`http://openweathermap.org/img/wn/${weather.list[25].weather[0].icon}@2x.png`} alt="альтернативный текст"/></div>
                      <div className="card-temp">{Math.round(weather.list[25].main.temp_max)}° <a>{Math.round(weather.list[25].main.temp_min)}°</a></div>
                    </div>
                    <div className="card">
                      <div className="card-date">{weather.list[33].dt_txt}</div>
                      <div className="card-img"><img src={`http://openweathermap.org/img/wn/${weather.list[33].weather[0].icon}@2x.png`} alt="альтернативный текст"/></div>
                      <div className="card-temp">{Math.round(weather.list[33].main.temp_max)}° <a>{Math.round(weather.list[33].main.temp_min)}°</a></div>
                    </div>
                  </div>
                </> : <></>}   
        </>
    )
}

export default Week
