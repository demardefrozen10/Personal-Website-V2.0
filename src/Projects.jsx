import NBA2KSquadFinder from '../src/assets/2ksquad.png'
import Typescript from '../src/assets/typescsript.svg'
import Net from '../src/assets/.net.svg'
import Tailwind from '../src/assets/tailwindcss.svg'
import Github from '../src/assets/github-mark.svg'
import G1Test from "../src/assets/g1test.png"
import ExternalLink from './assets/external-link.svg';
import Figma from './assets/figma.svg';
import Java from './assets/java.svg';
import SQLite from './assets/sqlite.svg';
import Gui from './assets/gui.png';

export default function Projects() {
    return <>
        <div className="max-w-3xl mx-auto px-4 pt-32">
        <h1 className="text-xl font-medium pb-3">Projects</h1>
        <p className="pb-7">Here are some projects I've worked on that best interest me!</p>
    </div>
        <div className="max-w-3xl mx-auto px-4 flex justify-center flex-col gap-11 mb-20">
        <div className="relative w-full overflow-hidden rounded-xl bg-white/75 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105">
        <img src={NBA2KSquadFinder}></img>
        <div className="flex flex-col m-5 gap-3">
            <div className="flex justify-between items-center">
        <p className="text-lg font-medium">NBA 2K SquadFinder</p>
        <div className="flex justify-center items-center gap-2">
        <img src={Typescript} width="29" height="40"></img>
        <img src={Net} width="29" height="40"></img>
        <img src={Tailwind} width="29" height="40" className="mr-5"></img>
        <a href="https://github.com/demardefrozen10/2KMatchmaker" target="_blank" rel="noopener noreferrer">
        <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-500/20 hover:bg-gray-500/10 h-10 px-4 py-2 relative rounded-full dark:bg-muted-foreground/10">
        <img src={Github} width="20"></img>
        </button>
        </a>
        </div>
        </div>
        <p className="text-sm text-gray-500">Web application that allows users who play NBA 2K to find teammates for MyCareer mode. Has authentication via OAuth 2.0 as well as normal username/password, using JWT token. Has live chat feature to chat with other players using SignalR.</p>
        </div>
        
    </div>
       <div className="relative w-full overflow-hidden rounded-xl bg-white/75 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105">
        <img src={G1Test}></img>
        <div className="flex flex-col m-5 gap-3">
            <div className="flex justify-between items-center">
        <p className="text-lg font-medium">G1 Practice Test</p>
        <div className="flex justify-center items-center gap-2">
        <img src={Typescript} width="29" height="40"></img>
        <img src={Figma} width="29" height="40"></img>
        <img src={Tailwind} width="29" height="40" className="mr-5"></img>
        <a href="https://g1test.testdriveds.ca/" target="_blank" rel="noopener noreferrer">
        <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-500/20 hover:bg-gray-500/10 h-10 px-4 py-2 relative rounded-full dark:bg-muted-foreground/10">
        <img src={ExternalLink} width="20"></img>
        </button>
        </a>
        </div>
        </div>
        <p className="text-sm text-gray-500">Created G1 practice test web application for Test Drive Driving school, a certified driving instruction school in Ontario. Contains over 80 questions with 3 different variations of tests. Project part of the Riipen Level Up program.</p>
        </div>
        </div>
           <div className="relative w-full overflow-hidden rounded-xl bg-white/75 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105">
        <img src={Gui}></img>
        <div className="flex flex-col m-5 gap-3">
            <div className="flex justify-between items-center">
        <p className="text-lg font-medium">HungryLions</p>
        <div className="flex justify-center items-center gap-2">
        <img src={Java} width="29" height="40"></img>
        <img src={SQLite} width="29" height="40" className="mr-5"></img>
        <a href="https://github.com/demardefrozen10/HungryLions" target="_blank" rel="noopener noreferrer">
        <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-500/20 hover:bg-gray-500/10 h-10 px-4 py-2 relative rounded-full dark:bg-muted-foreground/10">
        <img src={Github} width="20"></img>
        </button>
        </a>
        </div>
        </div>
        <p className="text-sm text-gray-500">A desktop GUI to find the best places to eat at York University's Keele campus. Used Java Swing for GUI design, SOLID Object Oriented Programming principles, SQLite, and JDBC for database interaction.</p>
        </div>
        </div>
        </div>
        </>
}