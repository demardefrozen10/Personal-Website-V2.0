import {createContext, useState} from 'react';

export const ThemeContext = createContext(null);


export function ThemeProvider(props) {
    const [theme, setTheme] = useState("");

    const handleThemeChange = () => {
        if (theme === "") {
            setTheme("dark");
        }
        else {
            setTheme("");
        }
    };

    return <ThemeContext value={{theme: theme, handleThemeChange: handleThemeChange}}>
        {props.children}
    </ThemeContext>;
}