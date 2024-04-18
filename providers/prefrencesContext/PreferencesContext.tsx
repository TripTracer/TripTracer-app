import { createContext } from 'react';

export const ColorSchemeContext = createContext({
  colorScheme: 'system',
  setColorScheme: (colorScheme: string) => {},
});

export const LanguageContext = createContext({
  language: 'en',
  setLanguage: (language: string) => {},
});
export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
