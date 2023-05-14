import React from 'react'
import "./CreateTweetStyles.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const CreateTweet = () => {
  return (
    <div className="create">
        <div className="create__first">
        <div className="create__img">
            <img src='/OIP.jpg' alt='profile img'/>
        
        </div> 
        <div className='create__input'>
            <input type='text' className='create__control' placeholder="What's Happening"/>
            </div>      
        </div>
        {/* <div className='create__second'>
            <div className='create__icons'>
        <PermMediaIcon className="ic"/>
        <ListAltIcon className="ic"/>
        <TagFacesIcon className="ic"/>
        <CalendarMonthIcon className="ic"/>
        </div>
        <div className='create__btn'>
            <a href='' >Post</a>
        </div>
        </div> */}
    </div>
  )
}

export default CreateTweet