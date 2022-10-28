import React from 'react';
import './today.css'
import {Search,Cloud,Percent,WindPower} from '@mui/icons-material';
const Today = () => {
    return (
        <div className='today'>
            <div className="todaywrapperleft">
                <div className="todaydetails">
                    <span className='daydetails place'>KOZHIKODE IN</span>
                    <span className='daydetails date'>fRIDAY 30 September</span>
                    <span className='daydetails population'>Population:30302</span>
                </div>
            </div>
            <div className="todaywrapperright">
                <div className="right">
                    {/* assets/image/weather.png */}
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/warm-weather-2-1147982.png" alt="jhd" className='climatedetailsimage' />
                    <span className='climatedetails temp'>27.8</span>
                    <span className='climatedetails weather'>Rain,Light Rain</span>
                    <div className="icons">
                        <span className='weathericon'><Cloud/>111ph</span>
                        <span  className='weathericon'><Percent/>68%</span>
                        <span  className='weathericon'><WindPower/>468</span>
                    </div>
                </div>
                <div className="left">
                    <div className="image1"> <img src="assets/image/weath.png" alt="am" className='dayimage'/><span className='daytime'>6.15 AM</span></div>
                    <div className="image2"> <img src="assets/image/weath.png" alt="pm" className='dayimage' /><span className='daytime'>6.18 AM</span></div>
                </div>
            </div>

            
        </div>
    );
};

export default Today;