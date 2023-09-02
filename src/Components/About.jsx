import React from 'react'
import '../styles/About.css' ; 

const About = () => {
  return (
    <div className="about-container">
                <div className="about-section" >
                     <div className = 'about' > About me!  </div>
                </div>


                    <div className="allcard-container">
                  
                        <div className = 'card-container'>
                                  <div className="card">
                                    <div className="cardimage">
                                      <img   src  = "/src/assets/web-designer.png"  alt = "web-designer" />
                                    </div>
                                    <div className="card-header">
                                    Web Designer 
                                    </div>
                                    <div className="card-details">
                                        I am a web desinger with a passion for 
                                        building beautiful and functional web applications. 
                                    </div>
                                  </div>
                        </div>

                        <div className = 'card-container'>
                            <div className="card">
                              <div className="cardimage">
                                <img   src  = "/src/assets/React -dev.png"  alt = "react-dev" />
                              </div>
                              <div className="card-header">
                                React  Developer  
                              </div>
                              <div className="card-details">
                              I feel happpy while designing and 
                                            implementing user-facing features 
                                            for websites and applications using React.js
                              </div>
                            </div>
                        </div>

                        <div className = 'card-container'>
                            <div className="card">
                              <div className="cardimage">
                                <img   src  = "/src/assets/Front-end.png"  alt = "Frontend" />
                              </div>
                              <div className="card-header">
                              Front-end Dev 
                              </div>
                              <div className="card-details">
                              Love to juggle through code and 
                                            structure UI which can give user 
                                            a good experience while surfing
                              </div>
                            </div>
                        </div>

                        <div className = 'card-container'>
                            <div className="card">
                              <div className="cardimage">
                                <img   src  = "/src/assets/backend-dev.png"  alt = "Backend" />
                              </div>
                              <div className="card-header">
                              Back-end Dev 
                              </div>
                              <div className="card-details">
                                      Having Skills  to build 
                                        Robust and Scalable  Application ,
                                        made a Dev Bad-ass Developer
                              </div>
                            </div>
                        </div>

              </div>
    </div>
  )
}

export default About