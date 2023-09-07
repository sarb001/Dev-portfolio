import React from 'react'
import '../styles/Home.css' ;
import  AvatarImg  from '../../public/owner Avatar.png';

const Home = () => {
  return (
    <div className="home-container" id = "home">
                <div className="home-items">
                    <div className="home-text">
                       <div id = "font" > Hi there!  I'm Sarb, </div>
                       <div id = "font-2"> I'm  Frontend Web Developer from India  </div>
                    </div>
                    <div className="home-avataimg">
                      <img src = {AvatarImg}   alt = "avatar-img" />
                    </div>
                </div>
    </div>
  )
}

export default Home