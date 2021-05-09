import { useState } from "react";

export const DarkTheme = () => {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }
    return [ theme, toggleTheme];
}
