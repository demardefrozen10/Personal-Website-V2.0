export default function Footer() {
  return (
    <footer className="w-full py-6 mt-20 border-t border-gray-200 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Jason Deng &middot; 
      <a href="mailto:jdeng244@my.yorku.ca" className="ml-1 underline hover:text-gray-700 dark:hover:text-gray-200">
        jdeng244@my.yorku.ca
      </a>
    </footer>
  );
}