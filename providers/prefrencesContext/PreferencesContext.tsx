import { createContext } from 'react';

export const ColorSchemeContext = createContext({
  colorScheme: 'system',
  setColorScheme: (colorScheme: string) => {},
});

export const LanguageContext = createContext({
  language: 'en',
  setLanguage: (language: string) => {},
});

export const DirectionContext = createContext({
  direction: 'ltr',
  setDirection: (direction: string) => {},
});
