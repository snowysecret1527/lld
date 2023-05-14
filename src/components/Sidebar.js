import React from 'react'
// import { FaVolumeUp, FaRegClock, FaStar } from "react-icons/fa";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
const Sidebar = () => {
  return (  
    <div className='sidebar'>
      <ul>
      <li><a href=''>
          <HomeIcon className='icons'/>
          Home
        </a></li>
        <li><a className='svg-container' href=''>

          <AccessTimeIcon className='icons'/>
          Latest
        </a></li>
        <li><a href=''>
          <StarOutlineIcon className='icons'/>
          Popular
        </a></li>
        <li><a href=''>
          <WhatshotIcon className='icons'/>
          Hot
        </a></li>
        <li><a href=''>
          {/* <FaVolumeUp className='icons' /> */}
          <TrendingUpIcon className='icons'/>
          Trending
        </a></li>
        <li><a href=''>
          <NotificationsIcon className='icons'/>
          Notifications
        </a></li>
        <li><a href=''>
          <PersonIcon className='icons'/>
          Profile
        </a></li>
        <div className='sidebarBtn'>
          <a href=''>
            Post
          </a>
        </div>
      </ul>

    </div>
  )
}

export default Sidebar