import React, { useState } from 'react';
import './searchbar.css'
import {Search} from '@mui/icons-material';

const Searchbar = ({searchInput}) => {
const [input,setInput]=useState({
  
})

const searchCity=(event)=>{
  const value=event.target.value;
  setInput({...input,value})
}
console.log("input==>",input)

const searchInputfgfgf=(e)=>{
  e.preventDefault()
  searchInput(input)
}
  return (
    <form onSubmit={searchInputfgfgf} >
       <div className='searchbar'>
             <div className="searchbarwrapper">
             
               <input type="text" placeholder="" className="topsearch-bar" onChange={searchCity} name='search'/>
              
               <Search className='searchicon'></Search>
          
             </div>
       </div>
       </form>
    
  );
};

export default Searchbar;