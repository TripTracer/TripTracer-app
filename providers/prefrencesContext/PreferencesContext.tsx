import { createContext } from 'react';

export const PreferencesContext = createContext({
<<<<<<< HEAD
<<<<<<< HEAD:providers/prefrencesContext/PreferencesContext.tsx
<<<<<<< HEAD
  colorScheme: 'system',
  setColorScheme: (colorScheme: string) => {},
=======
  toggleTheme: () => {},
  isThemeDark: false,
>>>>>>> 07c3b61 (feat: theme unit tests added)
=======
  colorScheme: 'system',
  setColorScheme: (colorScheme: string) => {},
>>>>>>> ce7c289 (fix: working on dynamic dark mode):providers/PreferencesContext.tsx
=======
  toggleTheme: () => {},
  isThemeDark: false,
>>>>>>> f46e10f (feat: theme unit tests added)
});
