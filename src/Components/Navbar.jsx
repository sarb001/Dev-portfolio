import React from 'react'

const Navbar = () => {
  return (
    <div className = 'navbar-container'>
        <div className = "navtitle">
        <a id = "home" href = "#home">  iamsarb_001  </a>
        </div>

        <a href = "#" className = "burger-menu">
            <span className = "bar"> </span>
            <span className = "bar"> </span>
            <span className = "bar"> </span>
        </a>

        <div className="navlinks">
            <ul>
                    <li> <a href = "#about" > About  </a>  </li>
                    <li> <a href = "#contact"  >  Contact  </a>  </li>
                    <li> <a href = "#skills" > Skills  </a> </li>
                    <li> <a href = "#work" > Work </a>  </li>
                    <li>  <a href = "" > Resume </a> </li>
            </ul>
        </div>
</div>
  )
}

export default Navbar