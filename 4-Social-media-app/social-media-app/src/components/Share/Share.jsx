import React from 'react'
import {PhotoLibrary,Label,LocationOn,EmojiEmotions} from '@mui/icons-material';
import './share.css'

export default function Share() {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
                <img className='shareprofileimg' src="./assets/images/1.jfif" alt="img" />
                <input placeholder='what is in your mind' className='shareinput' />
            </div>
            <hr className='sharehr' />

            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <PhotoLibrary className='gallery'/>
                        <span>Photo or video</span>
                    </div>
                    <div className="shareoption">
                        <Label className='tag'/>
                        <span>Tag</span>
                    </div>
                    <div className="shareoption">
                        <LocationOn className='location'/>
                        <span>Location</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotions className='emoji'/>
                        <span>Feelings</span>
                    </div>
                </div>
               <button className='share-btn'>Share</button>
            </div>
        </div>

    </div>
  )
}
