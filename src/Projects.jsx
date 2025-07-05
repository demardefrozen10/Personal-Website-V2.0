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
        <img src={context.theme ? GitHubWhite : Github} width="20"></img>
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
        <img src={context.theme ? GitHubWhite : Github} width="20"></img>
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