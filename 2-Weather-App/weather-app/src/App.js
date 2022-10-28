import { useState } from "react";
import Days from "./Components/Days/Days";
import Searchbar from "./Components/Searchbar/Searchbar";
import Today from "./Components/Today/Today";


function App() {

  const [state, setState]=useState({
    value:"",
    current:{},
    weeks:[],
    loading:false,
    error:false
  })

  const addtoState=(data)=>{
   
    setState({...state,value:data})

  }
  console.log("state==>",state);

  return (
    <>
     
    <Searchbar searchInput={addtoState} />
   <div className="container">
    <Today />
    <Days/>
   </div>

    </>
  );
}

export default App;
