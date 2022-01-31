import { useSelector } from 'react-redux';


const TodayCard = () => {
    const weather = useSelector(({ weather }) => weather);
    
    return (
        <>
           <div className="today-stat">
                <h2>Today's Highlights</h2>

                <div className="today-cards">
                  <div className="today-card">
                      <p>Wind status</p>
                      <div className="wind-status">{Math.round(weather.list[0].wind.speed)}km/h</div>
                  </div>

                  <div className="today-card">
                      <p>Min & Max temp</p>
                      <div className="min">
                        <img 
                          src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-low-temperature-weather-justicon-lineal-color-justicon.png" 
                          alt="cold"
                        />
                          {Math.round(weather.list[0].main.temp_min)}°c
                      </div>
                      <div className="max">
                        <img 
                          src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-high-temperature-weather-justicon-lineal-color-justicon.png" 
                          alt="hot"
                        />
                          {Math.round(weather.list[0].main.temp_max)}°c
                      </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default TodayCard
