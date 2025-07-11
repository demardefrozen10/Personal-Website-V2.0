import {useContext} from 'react';
import { ThemeContext } from './ThemeContext.jsx';
export default function Logo() {
    const context = useContext(ThemeContext);

  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${context.theme ? 'white' : 'black'}`}
      strokeWidth="2"
    >
      <path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}