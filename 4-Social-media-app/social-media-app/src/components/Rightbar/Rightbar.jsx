import React from 'react'
import { onlinefrds } from '../../data'
import Friends from '../friends/Friends'

import './rightbar.css'
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        <div className="rightbartop">
          <img src="./assets/images/gift.jfif" className='birthimg' alt="img" />
          <span className='birthtext'><b> Pola Foster</b> and <b>3 other friends</b>  have a birthday today</span>
        </div>
        <img src="./assets/images/main.jpg" className='mainimg' alt="img" />
        <h4>Online friends</h4>
        {onlinefrds.map((f)=>
                <Friends friends={f}/>
          )}
      </div>
    </div>
  )
}
