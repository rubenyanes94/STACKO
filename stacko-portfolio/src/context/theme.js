import { createContext, useContext } from 'react';

export const ThemeContext = createContext({ isDevMode: false, toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);
