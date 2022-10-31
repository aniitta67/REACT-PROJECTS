import React from 'react';
import { useEffect } from 'react';
import './today.css'
import {Search,Cloud,Percent,WindPower} from '@mui/icons-material';
const Today = ({details}) => {
   console.log(details);
        console.log(`TODAY-DETAILS city==> ${details.city} country==> ${details.country}  population==> ${details.population} degree==> ${details.degree} tempmin==> ${details.tempmin} `)
    
    return (
        <div className='today'>
            <div className="todaywrapperleft">
                <div className="todaydetails">
                    <span className='daydetails place'>{details.city} {details.country}</span>
                    <span className='daydetails date'>{details.date}</span>
                    <span className='daydetails population'>Population:{details.population}</span>
                </div>
            </div>
            <div className="todaywrapperright">
                <div className="right">
                    {/* assets/image/weather.png */}
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/warm-weather-2-1147982.png" alt="jhd" className='climatedetailsimage' />
                    <span className='climatedetails temp'>{details.temp}&#176;C</span>
                    <span className='climatedetails weather'>{details.main},{details.description}</span>
                    <div className="icons">
                        <span className='weathericon'><Cloud/>{details.pressure} hpa</span>
                        <span  className='weathericon'><Percent/>{details.humidity}%</span>
                        <span  className='weathericon'><WindPower/>{details.gust} m/s N</span>
                    </div>
                </div>
                <div className="left">
                    <div className="image1"> <img src="assets/image/sunrise.png" alt="am" className='dayimage'/><span className='daytime'>{details.sunset}AM</span></div>
                    <div className="image2"> <img src="assets/image/sunset.png" alt="pm" className='dayimage' /><span className='daytime'>{details.sunrise}PM</span></div>
                </div>
            </div>

            
        </div>
    );
};

export default Today;