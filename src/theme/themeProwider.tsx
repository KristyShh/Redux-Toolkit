import { useLayoutEffect } from "react";
import { ThemeContext } from "./themeContext";
import { useLocalStorage } from "../components/hooks/useLocalStorage";



export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');


    useLayoutEffect(() => {
        const root = window.document.documentElement;
        root.setAttribute('data-theme', theme);
}, [theme]);

const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
}
return (
    <ThemeContext.Provider value={{ 
        theme, 
        toggleTheme 
        }}> {children}
    </ThemeContext.Provider>
)
}