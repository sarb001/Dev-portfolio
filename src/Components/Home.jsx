import React from 'react'
import '../styles/Home.css' ;

const Home = () => {
  return (
    <div className="home-container" id = "home">
                <div className="home-items">
                    <div className="home-text">
                       <span id = "font" > Hello I'm Sarb, Full Stack  Web Dev from India  </span>
                    </div>
                    <div className="home-avataimg">
                      <img src = "/owner Avatar.png"   alt = "avatar-img" />
                    </div>
                </div>
    </div>
  )
}

export default Home