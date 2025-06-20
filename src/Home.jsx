import './App.css'
import GithubIcon from '../src/assets/github-mark-white.svg'
import LinkedinIcon from '../src/assets/linkedin.svg'
import NBA2KSquadFinder from '../src/assets/2ksquad.png'
import G1Test from "../src/assets/g1test.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Docker from '../src/assets/docker.svg'
import React from '../src/assets/react2.svg'
import Python from '../src/assets/python.svg'
import Scala from '../src/assets/scala.svg'
import Typescript from '../src/assets/typescsript.svg'
import Hadoop from '../src/assets/hadoop.svg'
import Net from '../src/assets/.net.svg'
import Javascript from '../src/assets/javascript.svg'
import Spark from '../src/assets/spark.svg'
import Spotify from '../src/assets/icons8-spotify.svg'
import Turtle from '../src/assets/bright-turtle.png'
import Globe from '../src/assets/globe.png'
import { useState, useEffect } from "react";
import Time from '../src/assets/Time.png'
import SpinningGlobe from './SpinningGlobe.jsx'

function Home() {

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

   const projects = [
    {
      image: NBA2KSquadFinder
    },
    {
      image: G1Test
    }
  ];

  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000 * 60); // update every minute
    return () => clearInterval(interval);
  }, []);



  return (
    <>
        <main className="max-w-3xl mx-auto px-4 pt-32">
          <h1 className="text-xl font-medium pb-3 ml-2 flex flex-col md:flex-row md:items-center gap-2">Hello there [name], welcome to my page!  <img src={Turtle} width="40" className="ml-2"></img> </h1>
          <p className="ml-2 text-md"> I'm an inspiring Software Engineer currently studying Computer Science at York University. I love working on projects that create a everlasting impact on thousands of users. Currently, I am learning best system design practices and more about AI.
          </p>
          <div className="grid gap-6 md:grid-cols-7 md:grid-rows-2 mt-5 ml-2">
          <div className="motion-preset-blur-up-md motion-delay-100 relative col-span-4 row-span-1 row-start-1 h-full overflow-hidden rounded-xl ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 md:col-span-2 md:col-start-1 md:row-span-2 md:h-full transition-transform duration-300 hover:scale-105">
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        
        <div className="relative mb-4">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full transition-transform duration-300 hover:scale-110 overflow-hidden">
            <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Ryker" alt="avatar" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Jason Deng
        </h2>
        
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
          Aspiring Software Engineer
        </p>
        
        <div className="text-xs text-gray-500 dark:text-gray-500">
          York University CS 2027
        </div>
        
      </div>
      
      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>         </div>
          <div className="motion-preset-blur-up-md motion-preset-rebound-up relative col-span-5 col-start-5  row-span-1 row-start-1 gap-6 overflow-hidden rounded-xl bg-white/75 p-4 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 motion-delay-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 md:col-span-3 md:col-start-3 md:row-span-1 transition-transform duration-300 hover:scale-105">
          
        <div className="absolute top-0 left-42 w-full h-full flex items-center">
          <div className="scale-200">
            <SpinningGlobe />
          </div>
        </div>
    <div className="flex flex-col justify-between h-full relative z-10">
      <div className="flex flex-col justify-start gap-1">
        <div className="flex gap-1">
      <img src={Globe} width="20" height="20"></img><p className="text-sm">Toronto, Canada</p>
      </div>
      <div className="flex gap-1">
      <img src={Time} width="20" height="20"></img><p className="text-sm">{currentTime}</p>
      </div>
      </div>
    <div className="flex w-auto max-w-fit justify-start rounded-full border border-zinc-200/10 bg-white/40 backdrop-blur-sm dark:border-white/5 dark:bg-muted/40">
  <img src={Spotify} className="h-8 w-8 mr-2"></img>
  <div className="flex flex-col justify-center items-start">
    <p className="text-xs whitespace-nowrap">Currently not</p>
    <p className="text-xs whitespace-nowrap">listening to music</p>
  </div>
</div>
          </div>
          </div>
          <div className="motion-preset-blur-up-md motion-delay-250 motion-preset-rebound-up relative col-span-5 col-start-1 row-start-3 flex justify-center overflow-hidden rounded-xl bg-white/75 p-4 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 md:col-span-2 md:col-start-6 md:row-start-1 md:h-40 transition-transform duration-300 hover:scale-105">
  <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 z-30 flex w-[70%] justify-center rounded-full border border-zinc-200/10 bg-white/40 py-0.5 backdrop-blur-sm dark:border-white/5 dark:bg-muted/40">
    <p>Favourite tech</p>
          </div>
          <div className=" flex h-full w-full flex-wrap justify-between sm:gap-2">
            <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 md:h-11 md:w-11 tech-icon">
            <img src={Docker}></img>
          </div>
            <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 md:h-11 md:w-11 tech-icon">
          <img src={Net}></img>
            </div>
            <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 md:h-11 md:w-11 tech-icon">
          <img src={React}></img>
            </div>
            <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 md:h-11 md:w-11 tech-icon">
          <img src={Python}></img>
            </div>
            <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 md:h-11 md:w-11 tech-icon">
          <img src={Javascript}></img>
            </div>
            <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 md:h-11 md:w-11 tech-icon ">
          <img src={Typescript}></img>
            </div>
            <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 md:h-11 md:w-11 tech-icon">
          <img src={Scala}></img>
            </div>
            <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 md:h-11 md:w-11 tech-icon">   
          <img src={Spark}></img>
                      </div>
                 <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 md:h-11 md:w-11 tech-icon">
          <img src={Hadoop}></img>
            </div>
          </div>
          </div>
          <div className="col-span-4 col-start-6 row-start-3 flex h-full flex-col justify-between gap-6 md:col-span-2 md:col-start-3 md:row-start-2">
          <a href="https://www.linkedin.com/in/jason-deng10/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 motion-preset-blur-up-md motion-delay-150 motion-preset-rebound-up relative col-span-2 col-start-3 row-start-2 h-full w-full gap-6 overflow-hidden rounded-xl p-4 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 transition-transform duration-300 hover:scale-105">
            <a className="flex items-center justify-center gap-2 mt-1">
          <img 
              src={LinkedinIcon} 
              alt="Github" 
              className="h-8 w-8 shrink-0 md:h-5 md:w-5"
            />          
            <p className="hidden md:flex md:text-sm text-white mt-0.5">Linkedin</p>
            </a>
          </a>
          <a href="https://github.com/demardefrozen10" target="_blank" rel="noopener noreferrer" className="bg-black motion-preset-blur-up-md motion-delay-150 motion-preset-rebound-up relative col-span-2 col-start-3 row-start-2 h-full w-full gap-6 overflow-hidden rounded-xl p-4 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 transition-transform duration-300 hover:scale-105">
          <a className="flex items-center justify-center gap-2 mt-1">
          <img 
              src={GithubIcon} 
              alt="Github" 
              className="h-8 w-8 shrink-0 md:h-5 md:w-5"
            />          
            <p className="hidden md:flex md:text-sm text-white mt-0.5">Github</p>
            </a>

          </a>
          </div>
          <a href="#/projects" className="motion-preset-blur-up-md motion-delay-150 motion-preset-rebound-up relative col-span-9 col-start-1 row-span-1 row-start-2 flex h-full max-h-56 cursor-pointer gap-6 overflow-hidden rounded-xl bg-white/75 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 md:col-span-3 md:col-start-5 md:row-start-2 md:h-40 transition-transform duration-300 hover:scale-105">
  <a className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30 flex w-[85%] justify-center rounded-full border border-zinc-200/10 bg-white/40 py-0.5 backdrop-blur-sm dark:border-white/5 dark:bg-muted/40 md:text-sm">
            <p className="text-md">My projects</p>
          </a>
          <Slider {...settings} className="w-full">
          {projects.map((project, index) => (
            <a key={index} className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 object-cover"
              />
            </a>
          ))}
        </Slider>
          </a>
          </div>
        </main>
    </>
  )
}

export default Home
