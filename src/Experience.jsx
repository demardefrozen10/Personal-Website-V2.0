import RBCBorealis from './assets/rbc_borealis.jpg';
import Dayforce from './assets/Dayforce.jpg';
import TTC from './assets/TTC.png';
import GDSC from './assets/gdsc.png';
import TDSB from './assets/tdsb.png';

export default function Experience() {
    return <>
    <div className="max-w-3xl mx-auto px-4 pt-32">
        <h1 className="text-xl font-medium pb-3">Work Experience</h1>
        <p className="pb-7">This is my current work experience. I am in my 3rd year of Computer Science at York University so far!</p>
    </div>
    <div className="max-w-3xl mx-auto px-4 flex justify-center flex-col gap-11">
    <div className="relative w-full overflow-hidden rounded-xl bg-white/75 p-4 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 md:p-6 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105">
    <div className="flex justify-between items-center">
    <img src={RBCBorealis} height="50" width="60" className="pb-1"></img>
    <p>Jan 2025 - Aug 2025</p>
    </div>
    <h1 className="pb-1">Data Engineer Intern</h1>
    <p>RBC Borealis • Internship</p>
    <p className="pt-1">Toronto, Canada</p>
    <div className="text-gray-500">
    <p className="pt-2 ">Working as a Data Engineer Intern at Royal Bank of Canada's AI and innovation subsidary under Transaction Services Data Solutions team.</p>
        <p className="mt-6">• Performed various Data Analysis tasks with over 1B+ records, joining, filtering, and aggregating datasets utilizing
Spark Scala to enhance logic for data pipelines.</p>
    <p className="mt-1">• Setup Jupyter Notebook environment on developer virtual machine environment and connected to Cloudera Data
Platform YARN cluster to perform Spark transformations.</p>
</div>
    </div>
        <div className="relative w-full overflow-hidden rounded-xl bg-white/75 p-4 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 md:p-6 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105">
    <div className="flex justify-between items-center">
    <img src={Dayforce} height="50" width="60"></img>
    <p>May 2024 - Dec 2024</p>
    </div>
    <h1 className="pb-1">Software Developer Intern</h1>
    <p>Dayforce, Inc. • Internship</p>
    <p className="pt-1">Toronto, Canada • Remote</p>
        <div className="text-gray-500">

    <p className="pt-2">Worked as a Software Developer Intern under Position Management team at Dayforce, a leading disrupter in human resources software and services.</p>
    <p className="mt-6">• Implemented CRUD operations for a Salary Protection feature using EF Core and designed API endpoints with
ASP.NET Core using repository pattern for maintainable, scalable, and testable code.</p>
    <p className="mt-1">• Developed integration tests for backend and frontend using SpecFlow (Gherkin) and Cypress, ensuring 100% code
coverage and stability.</p>
    <p className="mt-1">• Triaged and resolved 10+ customer-reported bugs, utilizing Git commands for collaboration, code reviews, and
merging fixes into the main branch.</p>
</div>
    </div>
            <div className="relative w-full overflow-hidden rounded-xl bg-white/75 p-4 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 md:p-6 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105">
    <div className="flex justify-between items-center">
    <img src={TTC} height="50" width="60" className="pb-2"></img>
    <p>May 2023 - Aug 2023</p>
    </div>
    <h1 className="pb-1">Surface Janitor</h1>
    <p>Toronto Transit Commission • Summer Student</p>
    <p className="pt-1">Toronto, Canada</p>
        <div className="text-gray-500">
    <p className="pt-2">Slaved away cleaning toilets, mopping floors, taking out garbage, and doing manual labour work. (Do not recommend).</p>
        <p className="mt-6">• Scrubbed and cleaned toilets daily.</p>
    <p className="mt-1">• Picked up garbage, scrubed more toilets, and cleaned washrooms.</p>
    <p className="mt-1">• Performed manual labour work, scrubed more toilets, and cleaned more washrooms.</p>
    </div>
    </div>
    </div>
     <div className="max-w-3xl mx-auto px-4 pt-10">
        <h1 className="text-xl font-medium pb-3">Volunteer Experience</h1>
        <p className="pb-7">Non-professional work experience (clubs, volunteer work).</p>
    </div>
    <div className="max-w-3xl mx-auto px-4 flex justify-center flex-col gap-11">
    <div className="relative w-full overflow-hidden rounded-xl bg-white/75 p-4 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 md:p-6 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105">
    <div className="flex justify-between items-center">
    <img src={GDSC} height="50" width="60" className="pb-1"></img>
    <p>Sept 2023 - May 2024</p>
    </div>
    <h1 className="pb-1">Technical Lead</h1>
    <p>Google Developer Student Clubs • Club Executive</p>
        <div className="text-gray-500">

    <p className="pt-2 ">Part of the executive team on York University's GDSC.</p>
        <p className="mt-6">• Assisted in leetcode sessions, providing help to other club members and attendees.</p>
    <p className="mt-1">• Helped promote clubs in various club events on campus at York University.</p>
    </div>
    
    </div>
        <div className="relative w-full overflow-hidden rounded-xl bg-white/75 p-4 ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:bg-muted/80 dark:ring-neutral-400/10 dark:ring-offset-neutral-400/10 md:p-6 motion-preset-blur-up-md motion-delay-0 transition-transform duration-300 hover:scale-105">
    <div className="flex justify-between items-center">
    <img src={TDSB} height="50" width="60" className="pb-1"></img>
    <p>Sept 2018 - Mar 2020</p>
    </div>
    <h1 className="pb-1">Support Staff</h1>
    <p>Toronto District School Board • Volunteer</p>
        <div className="text-gray-500">

    <p className="pt-2 ">Helped volunteer for international languages program in highschool.</p>
    </div>
    
    </div>
    </div>
    </>
}