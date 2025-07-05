import {createContext, useState} from 'react';

export const ThemeContext = createContext(null);


export function ThemeProvider(props) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

    const handleThemeChange = () => {
        if (theme === "") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            setTheme("");
            localStorage.setItem("theme", "");
        }
    };

    return <ThemeContext value={{theme: theme, handleThemeChange: handleThemeChange}}>
        {props.children}
    </ThemeContext>;
}