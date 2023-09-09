import React from 'react'
import '../styles/Work.css';

const Work = () => {
  return (
    <div className="work-container" id = "work">
          <div className = "work-section" >
             <span className = "portfolio-text" > My Creative Portfolio Section  </span>
          </div>

                  <div className = 'portfolio-container'>
                   
                     <div className="workcard-container">
                        <div className="workcard">
                          <div className="card-img">
                              <img src = "/Ecommerce-app (2).png"   alt = "Web-Designer" />
                          </div>
                          <div className="main-header">
                             <b> Insight-Ecommerce-Store </b>  
                          </div>
                          <div className="card-detail">
                                  An Online Ecommerce Store to Buy Anything you need
                                  <div className="btn-section">
                                    <a className='btn'  target = "_blank"  href = "https://assest-ecom-webapp.netlify.app/"> Live Project  </a>
                                    <a className='btn'  target = "_blank" href = "https://github.com/sarb001/Assest-Point-Ecom-App"> Source Code  </a>
                                  </div>
                          </div>
                        </div>
                     </div>

                     <div className="workcard-container">
                        <div className="workcard">
                          <div className="card-img">
                              <img src = "/Social-Media-App (2).png"   alt = "Web-Designer" />
                          </div>
                          <div className="main-header">
                              <b>  Insight-Social-Media-App  </b>
                          </div>
                          <div className="card-detail">
                                Connect With Friends and relatives  to Share and Like Posts 
                                <div className="btn-section">
                                    <a className='btn' target = "_blank" href = "https://social-media-frontend-8s19.onrender.com/login"> Live Project  </a>
                                    <a className='btn' target = "_blank" href = "https://github.com/sarb001/Share-Insight-Social-App"> Source Code  </a>
                              
                                </div>
                          </div>
                        </div>
                      </div>

                     <div className="workcard-container">
                        <div className="workcard">
                          <div className="card-img">
                              <img src = "/Video-Library-App.png"   alt = "Web-Designer" />
                          </div>
                          <div className="main-header">
                             <b> Video-Library-App  </b> 
                          </div>
                          <div className="card-detail">
                                  A Video Library  App used to Like,watch and Remove Videos from Collection of Videos  
                                  <div className="btn-section">
                                    <a className='btn'  target = "_blank"  href = "https://main--video-library-webapp.netlify.app/"> Live Project  </a>
                                    <a  className='btn' target = "_blank" href = "https://github.com/sarb001/Video-Library-Ecom-App"> Source Code  </a>
                                  </div>
                          </div>
                        </div>
                     </div>
                     
                  </div>
    </div>
  )
}

export default Work