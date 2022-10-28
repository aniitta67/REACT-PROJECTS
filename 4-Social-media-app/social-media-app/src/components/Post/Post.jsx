import {React,useState} from 'react'
import {MoreVert,ThumbUp,Favorite} from '@mui/icons-material';
import './post.css'

export default function Post({post}) {
 const [like,setLike]=useState(post.like)
 const [count,setCount]=useState(true)
  const likeCount=()=>{
    {count==true?setLike(like-1):setLike(like+1)}
    setCount(!count)
  }
  return (
    <div className='post'>
        <div className="postwrapper">
            <div className="postmain">
            <div className="posttop">
                <img className='postprofileimg' src={post.image1} alt="img" />
                 <span className='postname'>{post.fname}</span>
                 <span className='posttime'>{post.time}</span>
            </div>
            <MoreVert/>
            </div>
          <div className="postbottom">
            <span className='posttitle'>{post.description}</span>
            <img className='btmimg' src={post.image2} alt="btm" />
          </div>
        <div className="likecommentsection">
          <div className="likecomment">
             <div className='likes' onClick={likeCount}><ThumbUp/></div>
             <div className='heart'><Favorite/></div>
             <span className='likecount'>{like}</span>
          </div>
             <span className='comments'>comments</span>

             </div>
        </div>

    </div>
  )
}
