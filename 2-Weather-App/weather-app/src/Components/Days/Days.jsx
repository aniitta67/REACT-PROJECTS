import React from 'react';
import './days.css'

const Days = () => {
    return (
        <div className='days'>
            <div className="daywrapper">
            <hr></hr>  
                <div className="day-today dayofweek">
                    <span className="day">SUNDAY</span>
                    <span className="image"><img src="assets/Image/weath.png" className='dayimg' alt="" /></span>
                    <span className="degree">120-134</span>
                    <span className="weather">Rainy</span>
                    <span className="weather-details">Rainjdfshd</span>    
                </div> 
                <hr></hr>  
                <div className="sunday dayofweek">
                    <span className="day"></span>
                    <span className="image"><img src="assets/Image/weath.png" alt="" className='dayimg'/></span>
                    <span className="degree"></span>
                    <span className="weather"></span>
                    <span className="weather-details"></span>
                </div>
                <hr></hr>
                <div className="monday dayofweek">
                    <span className="day"></span>
                    <span className="image"><img src="assets/Image/weath.png" alt="" className='dayimg'/></span>
                    <span className="degree"></span>
                    <span className="weather"></span>
                    <span className="weather-details"></span>
                </div>
                <hr></hr>
                <div className="tuesday dayofweek">

                </div>
                <hr></hr>
                <div className="wednesday dayofweek">

                </div>
                <hr></hr>
                <div className="thursday dayofweek"></div><hr></hr>
                <div className="friday dayofweek"></div><hr></hr>
                <div className="saturday dayofweek"></div><hr></hr>
            </div>
            
        </div>
    );
};

export default Days;