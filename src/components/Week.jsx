import { useSelector } from 'react-redux';
import WeekCard from './WeekCard';

const Week = () => {

    const weather = useSelector(({ weather }) => weather);
      
    return (
        <>
         {weather.list !== undefined ?
              <>

                <WeekCard date={weather.list[9].dt_txt}
                  maxTemp={Math.round(weather.list[9].main.temp_max)}
                  minTemp={Math.round(weather.list[9].main.temp_min)}
                  img={`http://openweathermap.org/img/wn/${weather.list[9].weather[0].icon}@2x.png`}
                />

                <WeekCard date={weather.list[17].dt_txt} 
                  maxTemp={Math.round(weather.list[17].main.temp_max)}
                  minTemp={Math.round(weather.list[17].main.temp_min)}
                  img={`http://openweathermap.org/img/wn/${weather.list[17].weather[0].icon}@2x.png`}
                />

                <WeekCard date={weather.list[25].dt_txt}
                  maxTemp={Math.round(weather.list[25].main.temp_max)}
                  minTemp={Math.round(weather.list[25].main.temp_min)}
                  img={`http://openweathermap.org/img/wn/${weather.list[25].weather[0].icon}@2x.png`}
                />

                <WeekCard date={weather.list[33].dt_txt}
                  maxTemp={Math.round(weather.list[33].main.temp_max)}
                  minTemp={Math.round(weather.list[33].main.temp_min)}
                  img={`http://openweathermap.org/img/wn/${weather.list[33].weather[0].icon}@2x.png`}
                />

              </>
              :
              <></>
          }   
        </>
    )
}

export default Week