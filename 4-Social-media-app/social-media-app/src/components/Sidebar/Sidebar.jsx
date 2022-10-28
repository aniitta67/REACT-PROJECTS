import React from 'react'
import'./sidebar.css'
import {RssFeed,Chat,PlayCircle,PeopleAlt,Bookmarks,HelpOutline,WorkOutline,EventNote,School} from '@mui/icons-material/';
export default function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarwrapper">
          <ul className="sidebarlist">
            <li className="sidebar-item"><RssFeed/><span className='social-icons-items'>Feed</span> </li>
            <li className="sidebar-item"><Chat/><span className='social-icons-items'>Chat</span></li>
            <li className="sidebar-item"><PlayCircle/><span className='social-icons-items'>Videos</span></li>
            <li className="sidebar-item"><PeopleAlt/><span className='social-icons-items'>Groups</span></li>
            <li className="sidebar-item"><Bookmarks/><span className='social-icons-items'>Bookmarks</span></li>
            <li className="sidebar-item"><HelpOutline/><span className='social-icons-items'>Questions</span></li>
            <li className="sidebar-item"><WorkOutline/><span className='social-icons-items'>Jobs</span></li>
            <li className="sidebar-item"><EventNote/><span className='social-icons-items'>Events</span></li>
            <li className="sidebar-item"><School/><span className='social-icons-items'>Courses</span></li>
          </ul>
         <button className="showmore-btn">Show more</button>
         <hr className='sidebarhr' />
          <ul className="sidebarfriendlist">
            <li className="friendlist-item">
              <img className='friendlist-item-img' src="./assets/images/3.jfif" alt="img" />
              <span className='friendlist-item-name'>Name1</span>
            </li>
            <li className="friendlist-item">
              <img className='friendlist-item-img' src="./assets/images/4.jfif" alt="img" />
              <span className='friendlist-item-name'>Name1</span>
            </li>

          </ul>
       </div>
    </div>
  )
}
