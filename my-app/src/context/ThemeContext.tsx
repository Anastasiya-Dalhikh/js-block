import { createContext, useState, type PropsWithChildren } from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

export type ThemeMode = 'light' | 'dark';

interface ThemeContextValue{
    theme: ThemeMode,
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);


export const AppThemeProvider = ({children} : PropsWithChildren) =>{
    const [theme, setTheme] = useState<ThemeMode>('light');

    const currentTheme = theme === 'light' ? lightTheme : darkTheme;


    const toggleTheme = () => {
        setTheme((current) => current === 'light' ? 'dark' : 'light');
    }

    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            <ThemeProvider theme ={currentTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
