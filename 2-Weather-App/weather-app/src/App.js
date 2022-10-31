import { useState } from "react";
import Days from "./Components/Days/Days";
import Loader from "./Components/Loader/Loader";
import Searchbar from "./Components/Searchbar/Searchbar";
import Today from "./Components/Today/Today";
import axios from "axios";

function App() {

  const [state, setState]=useState({
    value:"",
    current:{},
    weeks:[],
    loading:false,
    error:false
  })
  


  const searchSubmit=(event)=>{
    event.preventDefault()
    setState({...state,loading:true})
    // get api
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${state.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`).then((response)=>{
      console.log("API-Data==>",response);
    const data=response.data;
    console.log("response data==>",data);
    const days=["Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    const currdate=new Date();  
    const date=`${days[currdate.getDay()]} ${currdate.getDate()} ${months[currdate.getMonth()]} `
    console.log("date==>",date);

    const sunset=new Date(data.list[0].sunset*1000).toLocaleTimeString().slice(0,4)
    const sunrise=new Date(data.list[0].sunrise*1000).toLocaleTimeString().slice(0,4)

    const details={
     day:days[currdate.getDay()],

      city:data.city.name,
      country:data.city.country,
      population:data.city.population,
      temp:data.list[0].temp.day,
      gust:data.list[0].gust,
     
      humidity:data.list[0].humidity,
      pressure:data.list[0].pressure,
      main:data.list[0].weather[0].main,
      description:data.list[0].weather[0].description,
      tempmin:data.list[0].temp.min,
      tempmax:data.list[0].temp.max,
      date:date,
      sunset:sunset,
      sunrise:sunrise
    }
   console.log(`
   sunset==> ${sunset} city==> ${details.city} country==> ${details.country}  population==> ${details.population} degree==> ${details.degree} tempmin==> ${details.tempmin} 
   RAIN==> ${details.main}
   `)
  // The details we need are given in the api. Access the week details and iterate through the each index
   const weekInfo=data.list
   const weekDetails=weekInfo.map((dayDetails,index)=>{
    return{
          day:new Date(dayDetails.dt*1000).toLocaleTimeString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'}).slice(0,3),
          main:dayDetails.weather[0].main,
          description:dayDetails.weather[0].description,
          icon:dayDetails.weather[0].icon
    }


   })  

 
   
  setState({...state,
  loading:false,
  current:details,
  weeks:weekDetails
  })
console.log("weeks",state.weeks);
   
    }).catch((error)=>{
      console.log(error)
      setState({...state,error:true})
     
    })
    
  }



const handleInputChange=(e)=>{
  setState({...state,value:e.target.value})
}
console.log("CURRENTDATA===>",state);

  return (
    <>
     
    <Searchbar 
    searchInput={searchSubmit} 
    searchCity={handleInputChange}
    />
    {state.loading==true?<Loader></Loader>:

   <div className="container">
     
    <Today details={state.current} />

    <Days details={state.weeks}/>
   </div>
}

    </>
  );
}

export default App;
