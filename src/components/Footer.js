import React from 'react';
import {GrFacebook} from "react-icons/gr";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    
    <div>
        
          <div className='text-center' color='white' bgColor='dark'><div/>
    
          <div className='text-center p-4'style={{ backgroundColor: 'rgba(0, 2, 2, 0.5)',color:"white" }}>
            © 2023 Copyright : 
            <a  style={{color:"white",marginLeft:"5px"}} href='https://mdbootstrap.com/'>
            Dream shooping.in
            </a>
            <div className='foot-icon'>
              <GrFacebook size={'1.8em'}/>
              <BsTwitter size={'1.8em'}/>
              <BsLinkedin size={'1.8em'}/>
            </div>
          </div>
        </div>
      
</div>
  
  )
}

export default Footer;