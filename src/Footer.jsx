import { useContext } from "react";
import { ThemeContext } from './ThemeContext.jsx';

export default function Footer() {
  const context = useContext(ThemeContext);
  
  return (
    <footer className={`${context.theme ? "dark" : ""} w-full py-6 mt-20 border-t border-gray-200 text-center text-sm text-gray-500 dark:border-zinc-700 dark:text-neutral-300`}>
      &copy; {new Date().getFullYear()} Jason Deng &middot; 
      <a href="mailto:jdeng244@my.yorku.ca" className="ml-1 underline hover:text-gray-700 dark:hover:text-white">
        jdeng244@my.yorku.ca
      </a>
    </footer>
  );
}