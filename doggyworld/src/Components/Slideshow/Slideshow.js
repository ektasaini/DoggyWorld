import React from 'react';
import {NavLink} from "react-router-dom";
import { Slide } from 'react-slideshow-image';
 
const slideImages = [

 'https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg',
  'https://airwallpaper.com/wp-content/uploads/2016/04/Cute-Dog-Desktop-Wallpapers.jpg',
 'https://airwallpaper.com/wp-content/uploads/2016/04/Beautiful-Dog-Desktop-Pictures.jpg',
 'https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172331.jpg',
 'https://i.pinimg.com/originals/85/e1/c0/85e1c0161e9c0d4fe926550d7c6b26e0.jpg'
 

  
];
 
const properties = {
  duration: 3000,
  transitionDuration: 600,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
   <div >
      <Slide {...properties}>
        <div className="each-slide">
          <div className ="img" style={{'backgroundImage': `url(${slideImages[0]})`}}>
           
          </div>
        </div>


        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
          </div>
        </div>


         <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
           </div>
        </div>
        

         <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
           </div>
        </div>

         <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
           </div>
        </div>
        
      </Slide>
  </div>
    )
}

export default Slideshow ;