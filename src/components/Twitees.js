import React from 'react'
import CreateTweet from './CreateTweet';
import "./TwiteesStyles.css";
import Posts from './Posts';
const Twitees = () => {
  return (
    <div className='posts'>
       
        <CreateTweet/>
        <Posts/>
        <Posts/>
        <Posts/>
    </div>
  )
}

export default Twitees