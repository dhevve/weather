import { useSelector } from 'react-redux';

const LeftBar = () => {

    const weather = useSelector(({ weather }) => weather);

    return (
        <>
                <div className="ex-img">
                    <img 
                        src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} 
                        alt="альтернативный текст"
                    />
                </div>

                <div className="weather-box">
                    <div className="temp">
                        {Math.round(weather.list[0].main.temp)}°c
                    </div>
                </div>

                <div className="location-text">
                    {weather.city.name}, {weather.city.country}
                </div> 
        </>
    )
}

export default LeftBar
