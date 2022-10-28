import React from 'react'
import Share from '../Share/Share'
import Post from '../Post/Post'
import './feed.css'
import {feed} from '../../data'
export default function feeds() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
      
          <Share/>
          {/* props */}

          {feed.map((p)=>
                <Post post={p}/>
          )}
         
          
          
     
      
      </div>
    </div>
  )
}
