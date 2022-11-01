import React from 'react';
import './main.css';
import moment from "moment";
import { useState } from 'react';
const Main = ({filterData}) => {
    console.log(filterData);


    return (
        <>
        <div className="day-wrapperday">
            <span className='detail-day'> {moment(filterData.dt_txt).format('dddd')}</span>
            <span>{moment(filterData.dt_txt).format('MMMM Do , h:mm a')}</span>
            <span>{filterData.wind.deg}&#176;C</span>
            <span>{moment(filterData.dt_txt).format('l')}</span>
            <span>{filterData.weather[0].main}</span>
            <span>{filterData.weather[0].description}</span>
         
        </div>



     </>
     
    );
};

export default Main;