import Experience from './Experience.jsx';
import Home from './Home.jsx';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import Projects from './Projects.jsx';

export default function Navigation() {
    return <>
    <Router>
         <div className="fixed inset-x-4 top-7 z-40">
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 to-white/0 dark:from-zinc-900/75 dark:to-zinc-900/0" />
      <nav className="fixed inset-x-4 top-7 z-40 mx-auto flex max-w-3xl items-center justify-between gap-2 overflow-hidden rounded-full border border-zinc-900/5 bg-white/80 px-7 py-4 shadow backdrop-blur-md dark:border-white/5 dark:bg-zinc-900/80">
            <div className="flex items-center gap-6">
                <NavLink to="/" className="flex items-center gap-3">
                    <Logo />
                </NavLink>
                <ul className="flex items-center">
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                                    isActive
                                        ? 'bg-zinc-100 text-zinc-900'
                                        : 'text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/experience"
                            className={({ isActive }) =>
                                `text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                                    isActive
                                        ? 'bg-zinc-100 text-zinc-900'
                                        : 'text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400'
                                }`
                            }
                        >
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                                    isActive
                                        ? 'bg-zinc-100 text-zinc-900'
                                        : 'text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400'
                                }`
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
            <button className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                <span className="sr-only">Toggle theme</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
            </button>
        </nav>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>

        </Routes>
    </Router>
    </>;
}