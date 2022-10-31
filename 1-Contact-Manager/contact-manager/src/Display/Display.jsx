import React, { useState } from 'react'
import { BorderColor, Delete } from '@mui/icons-material';
import './display.css'

export default function Display({display,deleteContact,updateContacts}) { 
  // console.log(display);

  return (
    <div>
        <div className="display">
       
                <span>{display.cname}</span>
                <span>{display.cemail}</span>
            
                <BorderColor className='iconedit'   onClick={()=>{updateContacts(display.id)}}/>
                <Delete className='icondelete' onClick={()=>{deleteContact(display.id)}} />
            
        </div>

    </div>
  )
}
