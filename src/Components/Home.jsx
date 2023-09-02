import React from 'react'
import '../styles/Home.css' ;

const Home = () => {
  return (
    <div className="home-container">
                <div className="home-items">
                    <div className="home-text">
                       <span style = {{fontSize:'34px'}}> Hello I'm Sarb, Full Stack  Web Dev from India  </span>
                    </div>
                    <div className="home-avataimg">
                      <img src = "/src/assets/owner Avatar.png"   alt = "avatar-img" />
                    </div>
                </div>
    </div>
  )
}

export default Home