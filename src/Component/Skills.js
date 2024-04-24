import typescript from "../assest/ts-icon.svg"
import reactIcon from "../assest/react-icon.svg"
import Mui from "../assest/mui.png"
import redux from "../assest/redux-icon.png"
import apiintegrationIcon from "../assest/api-integration.jpg"
import HTMLicon from "../assest/html-icon.svg"
import bcctal from "../assest/bbctal.jpeg"
import jira from "../assest/jira.png"
import nestjs from "../assest/nest-js.png"
import git from "../assest/github.svg"
import css from "../assest/css-icon.svg"
import BootStrap from "../assest/bootstrap-icon.svg"
import scss from "../assest/sass-icon.svg"

import jasmine from "../assest/jasmine.png"
import mongodb from "../assest/mongodb.svg"
const Skills = () => {

    const skills = [
        {image:typescript},
        {image:reactIcon},
        {image:Mui},
        {image:redux},
        {image:apiintegrationIcon},
        {image:HTMLicon},
        {image:bcctal},
        {image:jira},
        {image:nestjs},
        {image:git}, 
        {image:css},
        {image:BootStrap},
        {image:scss},
        {image:jasmine},

        {image:mongodb},
    ]
    return(
        <div>
              <div className="container-fluid py-5" id="skill">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:" 1px #dee2e6"}}>Skills</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
            </div>
            <div className="row align-items-center mt-5" style={{justifyContent:"center"}}>
                {skills.map(data =>(
                      <div className="skill-container">
                      <img src={data.image} style={{width:"inherit",height:"inherit"}} />
                  </div>
                ))}
                <div className="skill-container">
                    <img src={typescript} style={{width:"inherit",height:"inherit"}} />
                </div>
            </div>
           
        </div>
    </div>
        </div>
    )
}

export default Skills