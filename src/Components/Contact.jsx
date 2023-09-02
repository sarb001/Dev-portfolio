import React from 'react'
import '../styles/Contact.css' ;
import { FiTwitter } from 'react-icons/fi' ;
import { BsLinkedin ,BsGithub } from 'react-icons/bs' ;
import { MdOutgoingMail } from 'react-icons/md' ;


const Contact = () => {
  return (
   <div className="contact-container">

          <div className = "contact-text">
            <span > Let's Connect  </span>
          </div>

         <div className="connect-details" style = {{cursor:'pointer'}}>

                  <div className="twitter contact">  
                    <div className="logosection"> 
                     <FiTwitter />
                     </div>
                      <div className="logo-text">
                        iamsarb_001 
                      </div>
                    </div>

                  <div className="linkedin contact">  
                  <div className="logosection">
                    <BsLinkedin />
                  </div>
                      <div className="logo-text">
                      sarbkalyan-singh
                      </div>
                    </div> 

                   <div className="github contact">   
                   <div className="logosection">
                     < BsGithub />
                   </div>
                      <div className="logo-text">
                          sarb001
                      </div>
                    </div>

                    <div className="gmail contact">  
                      <div className="logosection"> 
                         <MdOutgoingMail />
                      </div>
                      <div className="logo-text">
                          mrsinghbusiness05@gmail.com 
                      </div>
                    </div>  

                 </div> 
         </div>

  )
}

export default Contact