import React from 'react';
import "./searchbar.css"
const Searchbar = () => {
    return (
        <div className='searchbar'>
             <div className="searchbarwrapper">
        <Search className='searchicon'/>
        <input type="text" placeholder="Search for friend/post or video" className="topsearchbar" />
      </div>
        </div>
    );
};

export default Searchbar;