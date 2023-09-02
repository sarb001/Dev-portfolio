import React from 'react'

const Contact = () => {
  return (
   <div className="contact-container">
      

          <div className = "contact-text" style = {{textAlign:'center',padding:'4%'}}>
            <span > Let's Connect  </span>
          </div>

         <div className="connect-details" style = {{cursor:'pointer'}}>

                  <div className="twitter-contact">  
                    <div className="logosection"></div>
                      <div className="logo-text">
                        iamsarb_001 
                      </div>
                    </div>

                  <div className="linkedin-contact">  <div className="logosection"></div>
                      <div className="logo-text">
                      sarbkalyan-singh
                      </div>
                    </div> 

                   <div className="github-contact">   <div className="logosection"></div>
                      <div className="logo-text">
                          sarb001
                      </div>
                    </div>

                    <div className="gmail-contact">  
                      <div className="logosection"></div>
                      <div className="logo-text">
                          mrsinghbusiness05@gmail.com 
                      </div>
                    </div>  

                 </div> 
         </div>

  )
}

export default Contact