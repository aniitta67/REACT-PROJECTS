import React, { useState } from 'react';
import './searchbar.css'
import {Search} from '@mui/icons-material';

const Searchbar = ({searchInput,searchCity}) => {
const [input,setInput]=useState({
  
})

// const searchCity=(event)=>{
//   const value=event.target.value;
//   setInput({...input,value})
// }


  return (
    <form onSubmit={searchInput} >
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