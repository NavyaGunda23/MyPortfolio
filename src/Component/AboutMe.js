// import profileImage from "../assest/profile.JPG"
import profileImage from "../assest/profile3.jpg"
import boostrapIcon  from "../assest/bootstrap-icon.svg"
import cssIcon from "../assest/css-icon.svg"
import htmlIcon from "../assest/html-icon.svg"
import jsIcon from "../assest/js-icon.svg"
import reactIcon from "../assest/react-icon.svg"
import sassIcon from "../assest/sass-icon.svg"
import typescriptIcon from "../assest/ts-icon.svg"
import nestJs from "../assest/nest-js.png"
import mui from "../assest/mui.png"
import mongodb from "../assest/mongodb.svg"

import React, { useCallback } from 'react';

const AboutMe = () => {
   
    return(
        <div>
               <div className="container-fluid py-5" id="about" style={{position:"relative"}}>
     
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: "1px #dee2e6"}}>About</h1>
                <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5 pb-4 pb-lg-0 ">
                    <img className="img-fluid rounded w-100" src={profileImage} alt="" />
                </div>
                <div className="col-lg-7 text-left">
                    <h3 className="mb-4">Web Developer & React Developer</h3>
                    <p>I'm Navya, a dedicated and creative front-end developer with over 7+ years of experience.I specialize in crafting dynamic, interactive websites for desktop and responsive web. My goal is to not only meet but exceed client expectations by delivering exceptional online experiences.  <br /><br />

My skill set includes proficiency in React JS, TypeScript, MUI, Redux, HTML, CSS, JavaScript , Nest JS and BBC TAL.
I also have extensive experience in integrating various APIs, third-party connectors, and databases into applications, enhancing functionality and user engagement.
<br /><br />
I take pride in adhering to the highest standards for web development, user experience, and performance. I am committed to producing clear, reliable code that complies with strict coding standards, ensuring the scalability and maintainability of projects. My approach is centered on creativity, innovation, and a deep understanding of client needs, enabling me to deliver outstanding results every time.</p>
                    <div className="column mb-3">
                        <h5 className=" text-uppercase text-primary">Skills</h5>
                        <div >
                        <img src={reactIcon} className="custom-img-width mr-3 mb-3" />
                        <img src={typescriptIcon} className="custom-img-width mr-3 mb-3"  />
                        <img src={jsIcon} className="custom-img-width mr-3 mb-3"  />
                        <img src={nestJs} className="custom-img-width mr-3 mb-3"  />
                        <img src={mui} className="custom-img-width mr-3 mb-3"  />
                        <img src={mongodb} className="custom-img-width mr-3 mb-3"  />
                        <img src={sassIcon} className="custom-img-width mr-3 mb-3"  />
                        <img src={htmlIcon} className="custom-img-width mr-3 mb-3"  />
                        <img src={cssIcon} className="custom-img-width mr-3 mb-3"  />
                        
                        <img src={boostrapIcon} className="custom-img-width mb-3" />
                        
                       
                       
                        </div>
                      
                        {/* <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Navya Gunda</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">15 May 1996</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Graduation</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">7+ years</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+971 50 540n1750</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">navyagunda.71@gmail.com</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Remraam, Dubai UAE</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div> */}
                    </div>
                    <a href="#contact" className="btn btn-outline-primary mr-4">Contact Me</a>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default AboutMe