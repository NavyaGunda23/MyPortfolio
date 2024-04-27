
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import AboutMe from "./Component/AboutMe";
import Education from "./Component/Education";
import Skills from "./Component/Skills";
import Services from "./Component/Services";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";


import boostrapIcon  from "./assest/bootstrap-icon.svg"
import cssIcon from "./assest/css-icon.svg"
import htmlIcon from "./assest/html-icon.svg"
import jsIcon from "./assest/js-icon.svg"
import reactIcon from "./assest/react-icon.svg"
import sassIcon from "./assest/sass-icon.svg"
import typescriptIcon from "./assest/ts-icon.svg"
import nestjs from "./assest/nest-js.png"
import moongodb from "./assest/mongodb.svg"
import muicon from "./assest/mui.png"
import github from "./assest/github.svg"

// import React, { useCallback } from 'react';

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [mobileResolution, setMobileResolution] = useState(false)

  useEffect(() => {
    

    window.addEventListener("resize", handleResize);
    console.log("screenSize", screenSize);
    // Clean up the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  });

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    if(window.innerWidth <= "768"){
      setMobileResolution(true)
    }else{
      setMobileResolution(false)
    }
  };
  window.onload=function(){
    handleResize()
  }
  useEffect(() => {

  },[mobileResolution])

  useEffect(() => {
  
    window.addEventListener("scroll", handleScroll);
  });

  const [headerPosition, setHeaderPosition] = useState(false);
  const handleScroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 90 ) {
      setHeaderPosition(true);
    } else {
      setHeaderPosition(false);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const aboutref = useRef(null);
  const handleScrollToAbout = () => {
    aboutref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
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

  return (
    <div classNameName="App">
      <Header headerPosition={headerPosition} mobileResolution={mobileResolution} />
      {/* <Particles id="tsparticles"  init={particlesInit} loaded={particlesLoaded} /> */}

      <Banner />
     

<div style={{position:"relative"}}>
  
<Particles
            init={particlesInit} loaded={particlesLoaded}
        id="tsparticles3"
        options={{
          fullScreen: {
            enable: false,
            zIndex: -1
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
                  opacity: 0.8
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
              enable: false,
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
              limit:60,
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
              value: 0.4
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
                  width: 30,
                  height: 30
                },
                {
                  src: cssIcon,
                  width: 30,
                  height: 30
                },
                {
                  src: htmlIcon,
                  width: 30,
                  height: 30
                },
                {
                  src: jsIcon,
                  width: 30,
                  height: 30
                },
                {
                  src: moongodb,
                  width: 30,
                  height: 30
                },
                {
                  src: reactIcon,
                  width: 30,
                  height: 30
                },
                {
                  src: sassIcon,
                  width: 30,
                  height: 30
                },
                {
                  src: typescriptIcon,
                  width: 30,
                  height: 30
                },
                {
                  src: nestjs,
                  width: 30,
                  height: 30
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
       <div ref={aboutref}>
        <AboutMe />
      </div>
<Education />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
     
</div>
    
<Footer />

      {!headerPosition && (
        <i
          className="fa fa-2x fa-angle-down text-white scroll-to-bottom"
          onClick={() => handleScrollToAbout()}
        ></i>
      )}

      {headerPosition && (
        <a
          className="btn btn-outline-dark px-0 back-to-top"
          onClick={() => handleScrollTop()}
          style={{ display: "inline" }}
        >
          <i className="fa fa-angle-double-up"></i>
        </a>
      )}
    </div>
  );
}

export default App;
