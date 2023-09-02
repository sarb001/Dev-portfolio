import React from 'react'

const Work = () => {
  return (
    <div className="work-container">

          <div className = "work-section" >
             <span className = "portfolio-text" > My Creative Portfolio Section  </span>
          </div>

                  <div className = 'portfolio-container'>
                   
                     <div className="workcard">
                       <div className="card-img">
                          <img src = "/dev-portfolio/src/assets/web-designer.png"   alt = "Web-Designer" />
                       </div>
                       <div className="main-header">
                           Insight-Ecommerce-Store
                       </div>
                       <div className="card-detail">
                              An Online Store to Buy Everything  
                            <button> Live Project  </button>
                            <button> Source Code  </button>
                       </div>
                     </div>

                     <div className="workcard">
                       <div className="card-img">
                          <img src = "/dev-portfolio/src/assets/web-designer.png"   alt = "Web-Designer" />
                       </div>
                       <div className="main-header">
                       Insight-Social-App
                       </div>
                       <div className="card-detail">
                             Connect With Friends to Share and Like Posts
                            <button> Live Project  </button>
                            <button> Source Code  </button>
                       </div>
                     </div>

                     <div className="workcard">
                       <div className="card-img">
                          <img src = "/dev-portfolio/src/assets/web-designer.png"   alt = "Web-Designer" />
                       </div>
                       <div className="main-header">
                           Insight-Ecommerce-Store
                       </div>
                       <div className="card-detail">
                              An Online Store to Buy Everything  
                            <button> Live Project  </button>
                            <button> Source Code  </button>
                       </div>
                     </div>
                     
                  </div>
    </div>
  )
}

export default Work