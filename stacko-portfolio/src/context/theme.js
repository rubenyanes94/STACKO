import { createContext, useContext } from 'react';

export const ThemeContext = createContext({ isDevMode: true, toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);
