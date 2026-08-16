import {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext(null);


export function ThemeProvider(props) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

    useEffect(() => {
        const isDark = theme === "dark";

        document.documentElement.classList.toggle("dark", isDark);
    }, [theme]);

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