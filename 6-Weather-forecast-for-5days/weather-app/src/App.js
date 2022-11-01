import { useEffect, useState } from "react";
import Main from "./Components/Main/Main";
import axios from "axios";
import Days from "./Components/Days/Days";

function App() {

 const[state,setState]=useState([])
 useEffect(()=>{
 axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=673001,IN&units=imperial&APPID=4f35aa6018a7c52c068ab9fb74cf1576`).then((response)=>{
 
  const data=response.data.list.filter(detail=>{
   return detail.dt_txt.includes('12:00:00')
    })
    setState(data)
    console.log("dataaaaaaa====>",state);
    console.log("dataaaaaaa====>",data);

 })

 },[])



  return (
   <>
         <div className='main'>
            <div className="mainwrapper">
                <div className="title">
                    <span>5-DAY-FORECAST</span>
                </div>
                <div className="details">
                    <span>City,</span>
                    <span>Country</span>
                    
                </div>
                <hr />
               
                
            </div>
           
        </div>
       
        <div className='day-container'>
        {state&&state.map(item=>(
     <Main filterData={item}/>

        ))}
      </div>
     
        
       
      
   
   </>
  );
}

export default App;
