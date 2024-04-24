// import profileImage from "../assest/profile.JPG"
import profileImage from "../assest/profile3.jpg"
import { TypeAnimation } from 'react-type-animation';
import React, { useCallback } from 'react';

import Particles from "react-tsparticles";
import boostrapIcon  from "../assest/bootstrap-icon.svg"
import cssIcon from "../assest/css-icon.svg"
import htmlIcon from "../assest/html-icon.svg"
import jsIcon from "../assest/js-icon.svg"
// import nodeIcon from "../assest/node-icon.svg"
import nestIcon from "../assest/nest-js.png"
import reactIcon from "../assest/react-icon.svg"
import sassIcon from "../assest/sass-icon.svg"
import typescriptIcon from "../assest/ts-icon.svg"
import moongodb from "../assest/mongodb.svg"
import muicon from "../assest/mui.png"
import Resume from "../assest/resume/NavyaGunda_Resume.pdf"
import linkedin from "../assest/linkedin.svg"
import github from "../assest/github.svg"
import whatsapp from "../assest/whatsapp.svg"


import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Banner = () =>{
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  
    if (engine.canvas) {
      // Customize the canvas style
      engine.canvas.style.backgroundColor = 'black';
      engine.canvas.style.position = 'fixed';
      engine.canvas.style.top = 0;
      engine.canvas.style.left = 0;
      engine.canvas.style.width = '100%';
      engine.canvas.style.height = '100%';
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
    return(
        <div style={{position:"relative"}}> 
               {/* <Particles id="tsparticles"  init={particlesInit} loaded={particlesLoaded} /> */}
        
            <div className="container-fluid  d-flex align-items-center mb-5 py-5" id="home" style={{minHeight: "100vh",zIndex:2,position:"relative"}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                    <img className="img-fluid w-100 rounded-circle shadow-sm" src={profileImage} alt="" />
                </div>
                <div className="col-lg-7 text-center text-lg-left">
                    <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                    <h1 className="display-3 text-uppercase text-primary mb-2" style={{webkitTextStroke: "2px #ffffff"}}>Navya Gunda</h1>
                    <TypeAnimation
                    className="font-weight-lighter text-white"
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front End Developer',
        1000,
        'React Js Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block' }}
      repeat={Infinity}
    />
                   <div className="row-cols-3 mt-5">
                    <a href="https://www.linkedin.com/in/navya-gunda-318b5112b/" target="_blank">
                      <img src={linkedin} className="custom-img-width mr-3" />
                    </a>
                    <a href="//api.whatsapp.com/send?phone=971505401750&text=Hi" target="_blank">
                   
                      <img src={whatsapp } className="custom-img-width  mr-3"  />
                    </a>
                    <a href="https://github.com/NavyaGunda23" target="_blank">
                      <img src={github} className="custom-img-width  mr-3"  />
                    </a>
                   </div>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                    <a href="#contact"  className="btn btn-light mr-5 pl-5 pr-5" >Contact Me</a>

                        {/* <a href={Resume}  target='_blank'  className="btn btn-outline-light mr-5" onClick={()=> handleDownloadCV()}>Download CV</a> */}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        <Particles
            init={particlesInit} loaded={particlesLoaded}
        id="tsparticles"
        options={{
          fullScreen: {
            enable: false,
            zIndex: 1
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse"
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5
                },
                radius: 60
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1
                }
              },
              push: {
                quantity: 2
              },
              remove: {
                quantity: 2
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1
            },
            move: {
              attract: {
                enable: true,
                rotate: {
                  x: 600,
                  y: 1200
                }
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              limit: 40,
              value: 15
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false
              },
              random: true,
              value: 1
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false
              },
              direction: "random",
              random: true,
              value: 0
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400"
              },
              image: [
                {
                  src: boostrapIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: cssIcon,
                  width: 20,
                  height: 20
                },
                // {
                //   "src": wordpress,
                //   "width": 20,
                //   "height": 20
                // },
                // {
                //   "src": shopify,
                //   "width": 20,
                //   "height": 20
                // },
                {
                  src: htmlIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: jsIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: nestIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: reactIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: sassIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: typescriptIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: moongodb,
                  width: 20,
                  height: 20
                },
                {
                  src: muicon,
                  width: 30,
                  height: 30
                },
                {
                  src: github,
                  width: 30,
                  height: 30
                },
              ],
              polygon: {
                sides: 5
              },
              stroke: {
                color: "#000000",
                width: 0
              },
              type: "image"
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false
              },
              random: false,
              value: 16
            }
          },
         
        }}
      />
        </div>
    )
}

export default Banner