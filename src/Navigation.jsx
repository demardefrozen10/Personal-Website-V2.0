import Experience from './Experience.jsx';
import Home from './Home.jsx';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import Projects from './Projects.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import {useContext} from 'react';
import { ThemeContext } from './ThemeContext.jsx';
export default function Navigation() {

    const context = useContext(ThemeContext);
    const handleThemeChange = () => {
        context.handleThemeChange();
    }

    return <>
    <Router>
        <ScrollToTop/>
         <div className="fixed inset-x-4 top-7 z-40">
      <div className={`${context.theme ? "dark" : ""} absolute inset-0 bg-gradient-to-b from-white/75 to-white/0 dark:from-zinc-900/75 dark:to-zinc-900/0`} />
      <nav className={`${context.theme ? "dark" : ""} fixed inset-x-4 top-7 z-40 mx-auto flex max-w-3xl items-center justify-between gap-2 overflow-hidden rounded-full border-4 border-zinc-100 bg-white/80 px-7 py-4 shadow backdrop-blur-md dark:border-4 dark:border-zinc-700 dark:bg-zinc-900/80`}>
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
            <button
                className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                onClick={handleThemeChange}
            >
                <span className="sr-only">Toggle theme</span>
                {context.theme ? (
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 2a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-16a1 1 0 011 1v1a1 1 0 11-2 0V2a1 1 0 011-1zm8 8a1 1 0 100 2h1a1 1 0 100-2h-1zm-16 0a1 1 0 100 2H1a1 1 0 100-2h1zm13.657 5.657a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm-11.314 0a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm11.314-11.314a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm-11.314 0a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z"/>
                    </svg>
                ) : (
                    <svg className="h-5 w-5 text-zinc-700" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                    </svg>
                )}
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