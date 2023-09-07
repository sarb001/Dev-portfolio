import React from 'react'
import '../styles/Contact.css' ;
import { FiTwitter } from 'react-icons/fi' ;
import { BsLinkedin ,BsGithub } from 'react-icons/bs' ;
import { MdOutgoingMail } from 'react-icons/md' ;


const Contact = () => {
  return (
   <div className="contact-container" id = "contact">

          <div className = "contact-text">
            <span > Let's Connect  </span>
          </div>

         <div className="connect-details" style = {{cursor:'pointer'}}>

                  <div className="twitter contact">  
                    <div className="logosection"> 
                     <FiTwitter />
                     </div>
                      <div className="logo-text">
                        <a href = "https://twitter.com/iamsarb_001"> iamsarb_001  </a> 
                      </div>
                    </div>

                  <div className="linkedin contact">  
                  <div className="logosection">
                    <BsLinkedin />
                  </div>
                      <div className="logo-text">
                      <a href = "https://www.linkedin.com/in/sarbkalyan-singh-399158159/"> sarbkalyan-singh </a>   
                      </div>
                    </div> 

                   <div className="github contact">   
                   <div className="logosection">
                     < BsGithub />
                   </div>
                      <div className="logo-text">
                        <a href = "https://github.com/sarb001"> sarb001 </a>   
                      </div>
                    </div>

                    <div className="gmail contact">  
                      <div className="logosection"> 
                         <MdOutgoingMail />
                      </div>
                      <div className="logo-text">
                         <a href = "mailto:mrsinghbusiness05@gmail.com "> mrsinghbusiness05@gmail.com  </a>  
                      </div>
                    </div>  

                 </div> 
         </div>

  )
}

export default Contact