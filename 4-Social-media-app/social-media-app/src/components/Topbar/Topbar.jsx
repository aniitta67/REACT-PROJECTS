import React from 'react'
import './topbar.css'
import {Search,Chat,Person,Notifications} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarright">
        <span className='topbarlogo'>Mai-Tweet</span>
      </div>
      <div className="topbarcenter">
        <Search className='searchicon'/>
        <input type="text" placeholder="Search for friend/post or video" className="topsearchbar" />
      </div>
      <div className="topbarleft">
        <div className="topbar-link">
          <span className='topbarlinkitem'><Link to={'/profile'}>Profile</Link></span>
          
          <span className='topbarlinkitem'><Link to={'/'}>Home</Link></span>
        </div>
        <div className="topbar-icon">
          <div className="topbar-icon-item">
            < Person/>
            <span className="badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Chat/>
            <span className="badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications/>
            <span className="badge">3</span>
          </div>
        </div>
        <img src="./assets/images/3.jfif" alt="profileimg" className="topbarprofile" />
      </div>

    </div>
  )
}
