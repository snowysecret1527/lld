import React from 'react'
import "./PostsStyle.css";
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import CommentIcon from '@mui/icons-material/Comment';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const Posts = () => {
  return (
    <div className='post'>
        <div className='post__first'>
        <div className='post__first__img'>
            <img src='/OIP.jpg' alt='profile'/>
        </div>
        <div className='post__first__name'>9859796</div>
        
        <div className='post__first__username'>@754287</div>
        </div>
    <div className='post__details'>
    <div className='post__details__msg'>
        hcasyfoelfhvcAWSUWEIOFLYURI WUE091238Y3VsaHDJKEWUG56P7I3HGDvgdovg
        
        </div>
        <div className='post__details__img'>
            <img src='/blockchain.jpg' alt='image'/>
        
    </div>
    <div className='reaction'>
<span><ThumbUpAltRoundedIcon className='re'/>20</span>
<span><ThumbDownRoundedIcon className='re'/>0</span>
{/* <div className='reaction1'> */}
<span><CommentIcon className='re'/></span>
<span><VolumeUpIcon className='re'/></span>
<span><BookmarkBorderIcon className='re'/></span></div>
    {/* </div> */}
    </div>
    </div>
  )
}

export default Posts