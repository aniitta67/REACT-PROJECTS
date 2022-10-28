import React from 'react'


export default function ({friends}) {
  return (
    <div>
        <ul className="sidebarfriendlist">
            <li className="friendlist-item">
              <img className='friendlist-item-img' src={friends.image1} alt="img" />
              <span className='imgbadge'></span>
              <span className='friendlist-item-name'>{friends.fname}</span>
              
            </li>
        </ul>

    </div>
  )
}
