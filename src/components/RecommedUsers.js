import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import "./RecStyles.css"
const RecommedUsers = () => {
  return (
    <div className='T'>
      <section>
        <div className='Containee'>
         <div className='cards'>
          <div className='card'>
            <h3><ElectricBoltIcon/> Recommened users</h3>
            <div className='users'>
              <div className='p'>
              <div className='post__first__img'>
            <img src='/OIP.jpg' alt='profile'/>
            </div>
        
            <div className='post__first__name'>9859796</div>
        
        <div className='post__first__username'>@754287</div>
        </div>
        <div className='p'>
        <div className='post__first__img'>
            <img src='/OIP.jpg' alt='profile'/>
            </div>
        <div className='post__first__name'>9859796</div>
        
        <div className='post__first__username'>@754287</div>
        </div>
        <div className='p'>
        <div className='post__first__img'>
            <img src='/OIP.jpg' alt='profile'/>
            </div><div className='post__first__name'>9859796</div>
        
        <div className='post__first__username'>@754287</div>
            </div>
            </div>
            
            
          </div>
          <div className='C'>
            
              <p><strong>LIVELOUD</strong> Discord</p>
              
              <a><BrightnessLowIcon/>Powered by SAAARP Labs </a>
                
              
            </div>
         </div>
        </div>
      </section>
   </div> 
  )
}

export default RecommedUsers