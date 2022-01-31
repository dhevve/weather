import React from 'react';

const WeekCard = ({date, maxTemp, minTemp, img}) => {
  return (
    <div className="week-card">

        <div className="card">
            <div className="card-date">{date}</div>
            <div className="card-img">
                <img src={img} alt="альтернативный текст"/>
            </div>
            <div className="card-temp">{maxTemp}° <a>{minTemp}°</a></div>
        </div>

     </div>
  );
};

export default WeekCard;
