import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDevMode, setIsDevMode] = useState(true);

    useEffect(() => {
        document.body.setAttribute('data-theme', isDevMode ? 'dev' : 'analyst');
    }, [isDevMode]);

    const toggleTheme = () => setIsDevMode(!isDevMode);

    return (
        <ThemeContext.Provider value={{ isDevMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};