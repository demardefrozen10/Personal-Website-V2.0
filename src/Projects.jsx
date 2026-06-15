import NBA2KSquadFinder from '../src/assets/2ksquad.png'
import Typescript from '../src/assets/typescsript.svg'
import Net from '../src/assets/.net.svg'
import Tailwind from '../src/assets/tailwindcss.png'
import Github from '../src/assets/github-mark.svg'
import G1Test from "../src/assets/g1test.png"
import ExternalLink from './assets/external-link.svg';
import Figma from './assets/figma.png';
import Java from './assets/java.svg';
import SQLite from './assets/sqlite.svg';
import Gui from './assets/gui.png';
import { ThemeContext } from './ThemeContext.jsx';
import { useContext } from "react";
import GitHubWhite from '../src/assets/github-mark-white.svg';
import SQLiteDark from '../src/assets/sqlitelite.png';
import ExternalLinkLite from '../src/assets/externallinklight.png';
import SpringBoot from '../src/assets/springboot.png';
import Docker from '../src/assets/docker.png';
import AWS from '../src/assets/aws.png';
import AWSLight from '../src/assets/awslight.png';
import RateMySupps from '../src/assets/ratemysupps.png';

const GEMINI_ICON_LIGHT = "https://img.icons8.com/?size=100&id=hfAYcPE3N8XF&format=png&color=000000";
const GEMINI_ICON_DARK = "https://img.icons8.com/?size=100&id=hfAYcPE3N8XF&format=png&color=FFFFFF";
const DOCKER_ICON = "https://img.icons8.com/?size=100&id=11673&format=png&color=000000";
export default function Projects() {

    const context = useContext(ThemeContext);

    return <>
        <div className="max-w-3xl mx-auto px-4 pt-32">
        <h1 className={`${context.theme ? "dark" : ""} text-xl font-medium pb-3 dark:text-neutral-300`}>Projects</h1>
        <p className={`${context.theme ? "dark" : ""} pb-7 dark:text-neutral-300`}>Here are some notable projects that I have worked on. To see all my projects you can find them on my Github.
</p>
    </div>
        <div className="max-w-3xl mx-auto px-4 flex justify-center flex-col gap-11">
              <div className={`${context.theme ? "dark" : ""} relative w-full overflow-hidden rounded-xl bg-white/75 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-black dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105`}>
        <img className="w-full h-90 object-cover" src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/325/944/datas/gallery.jpg"></img>
        <div className="flex flex-col m-5 gap-3">
            <div className="flex justify-between items-center">
        <p className={`${context.theme ? "dark" : ""} text-lg font-medium dark:text-neutral-300`}>SENSE 🏆</p>
        <div className="flex justify-center items-center gap-2">
        <img src={Typescript} width="29" height="40"></img>
        <img src={context.theme ? GEMINI_ICON_DARK : GEMINI_ICON_LIGHT} width="20" height="30"></img>
        <img src={DOCKER_ICON} width="29" height="40"></img>
        <img src={context.theme ? SQLiteDark : SQLite} width="29" height="40"></img>
        <a href="https://devpost.com/software/aaj" target="_blank" rel="noopener noreferrer">
        <button className={`${context.theme ? "dark" : ""} cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-500/20 hover:bg-gray-500/10 h-10 px-4 py-2 relative rounded-full dark:bg-neutral-800`}>
        <img src={context.theme ? ExternalLinkLite : ExternalLink} width="20"></img>
        </button>
        </a>
        </div>
        </div>
        <p className={`${context.theme ? "dark" : ""} text-sm text-gray-500 dark:text-neutral-300`}>
        Winner of best accessibility hack for CTRL+HACK+DEL. Smart accessbility glasses that constantly gives feedback on user's surroundings based on video output as well as sensor to detect nearby objects. Engineered UI dashboard for 24/7 99.9% uptime video viewing of person for caregivers with ElevenLabs voice change of Gemini output. Built using Gemini's Live API, FastAPI, SQLite, React.js, Rasberry Pi, and Adriuno.
        </p>
        </div>
        
    </div>
              <div className={`${context.theme ? "dark" : ""} relative w-full overflow-hidden rounded-xl bg-white/75 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-black dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105`}>
        <img src={RateMySupps}></img>
        <div className="flex flex-col m-5 gap-3">
            <div className="flex items-center justify-between gap-2">
        <p className={`${context.theme ? "dark" : ""} text-lg font-medium dark:text-neutral-300`}>RateMySupplement</p>
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
        <img src={Typescript} className="w-6 h-6 sm:w-[29px] sm:h-10 md:w-8 md:h-8 object-contain"></img>
        <img src={SpringBoot} className="w-5 h-5 sm:w-5 sm:h-[30px] md:w-6 md:h-6 object-contain"></img>
        <img src={Docker} className="w-6 h-6 sm:w-[29px] sm:h-10 md:w-8 md:h-8 object-contain"></img>
        <img src={context.theme ? AWSLight : AWS} className="w-6 h-6 sm:w-[29px] sm:h-10 md:w-8 md:h-8 object-contain"></img>
        <a href="https://ratemysupp.com" target="_blank" rel="noopener noreferrer">
        <button className={`${context.theme ? "dark" : ""} cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-500/20 hover:bg-gray-500/10 h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 relative rounded-full dark:bg-neutral-800`}>
        <img src={context.theme ? ExternalLinkLite : ExternalLink} className="w-4 h-4 sm:w-5 sm:h-5"></img>
        </button>
        </a>
        </div>
        </div>
        <p className={`${context.theme ? "dark" : ""} text-sm text-gray-500 dark:text-neutral-300`}>
        Built a Spring Boot + React web app for supplement reviews, integrating AWS services like S3 for image storage, RDS for database management, and ECS for container orchestration. Deployed the application using Docker containers on AWS ECS.
        </p>

        </div>
        
    </div>
        <div className={`${context.theme ? "dark" : ""} relative w-full overflow-hidden rounded-xl bg-white/75 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-black dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105`}>
        <img src={NBA2KSquadFinder}></img>
        <div className="flex flex-col m-5 gap-3">
            <div className="flex justify-between items-center">
        <p className={`${context.theme ? "dark" : ""} text-lg font-medium dark:text-neutral-300`}>NBA 2K SquadFinder</p>
        <div className="flex justify-center items-center gap-2">
        <img src={Typescript} width="29" height="40"></img>
        <img src={Net} width="29" height="40"></img>
        <img src={Tailwind} width="29" height="40"></img>
        <a href="https://github.com/demardefrozen10/2KMatchmaker" target="_blank" rel="noopener noreferrer">
        <button className={`${context.theme ? "dark" : ""} cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-500/20 hover:bg-gray-500/10 h-10 px-4 py-2 relative rounded-full dark:bg-neutral-800`}>
        <img src={context.theme ? GitHubWhite : Github} className="w-5 h-5 min-w-[20px] min-h-[20px]" style={{width: '20px', height: '20px'}} alt="GitHub" />
        </button>
        </a>
        </div>
        </div>
        <p className={`${context.theme ? "dark" : ""} text-sm text-gray-500 dark:text-neutral-300`}>Web application that allows users who play NBA 2K to find teammates for MyCareer mode. Has authentication via OAuth 2.0 as well as normal username/password, using JWT token. Has live chat feature to chat with other players using SignalR.</p>
        </div>
        
    </div>
       <div className={`${context.theme ? "dark" : ""} relative w-full overflow-hidden rounded-xl bg-white/75 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-black dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105`}>
        <img src={G1Test}></img>
        <div className="flex flex-col m-5 gap-3">
            <div className="flex justify-between items-center">
        <p className={`${context.theme ? "dark" : ""} text-lg font-medium dark:text-neutral-300`}>G1 Practice Test</p>
        <div className="flex justify-center items-center gap-2">
        <img src={Typescript} width="29" height="40"></img>
        <img src={Figma} width="29" height="40"></img>
        <img src={Tailwind} width="29" height="40"></img>
        <a href="https://g1test.testdriveds.ca/" target="_blank" rel="noopener noreferrer">
        <button className={`${context.theme ? "dark" : ""} cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-500/20 hover:bg-gray-500/10 h-10 px-4 py-2 relative rounded-full dark:bg-neutral-800`}>
        <img src={context.theme ? ExternalLinkLite : ExternalLink} width="20"></img>
        </button>
        </a>
        </div>
        </div>
        <p className={`${context.theme ? "dark" : ""} text-sm text-gray-500 dark:text-neutral-300`}>Created G1 practice test web application for Test Drive Driving school, a certified driving instruction school in Ontario. Contains over 80 questions with 3 different variations of tests. Project part of the Riipen Level Up program.</p>
        </div>
        </div>
           <div className={`${context.theme ? "dark" : ""} relative w-full overflow-hidden rounded-xl bg-white/75 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-black dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105`}>
        <img src={Gui}></img>
        <div className="flex flex-col m-5 gap-3">
            <div className="flex justify-between items-center">
        <p className={`${context.theme ? "dark" : ""} text-lg font-medium dark:text-neutral-300`}>HungryLions</p>
        <div className="flex justify-center items-center gap-2">
        <img src={Java} width="29" height="40"></img>
        <img src={context.theme ? SQLiteDark : SQLite} width="29" height="40"></img>
        <a href="https://github.com/demardefrozen10/HungryLions" target="_blank" rel="noopener noreferrer">
        <button className={`${context.theme ? "dark" : ""} cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-500/20 hover:bg-gray-500/10 h-10 px-4 py-2 relative rounded-full dark:bg-neutral-800`}>
        <img src={context.theme ? GitHubWhite : Github} className="w-5 h-5 min-w-[20px] min-h-[20px]" style={{width: '20px', height: '20px'}} alt="GitHub" />
        </button>
        </a>
        </div>
        </div>
        <p className={`${context.theme ? "dark" : ""} text-sm text-gray-500 dark:text-neutral-300`}>A desktop GUI to find the best places to eat at York University's Keele campus. Used Java Swing for GUI design, SOLID Object Oriented Programming principles, SQLite, and JDBC for database interaction.</p>
        </div>
        </div>
        </div>
        </>
}
