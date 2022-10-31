import React from 'react';
import './days.css'

const Days = ({details}) => {
  console.log(details);
    return (
        <div className='days'>
            <div className="daywrapper">

               {details.map((data)=>(
                <>
               <hr></hr>  
                <div className="day-today dayofweek">
                    <span className="day">{data.day}</span>
                    {/* <span className="image"><img src="assets/Image/weath.png" className='dayimg' alt="" /></span> */}
                    <span className="image"><img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} /></span>

                    <span className="degree">{data.day}</span>
                    <span className="weather">{data.main}</span>
                    <span className="weather-details">{data.description}</span>    
                </div> 
             <hr></hr> 
             </>
               
               
              ) )} 

            </div>
            
        </div>
    );
};

export default Days;