import { createContext } from 'react';

export const PreferencesContext = createContext({
<<<<<<< HEAD
  colorScheme: 'system',
  setColorScheme: (colorScheme: string) => {},
=======
  toggleTheme: () => {},
  isThemeDark: false,
>>>>>>> 07c3b61 (feat: theme unit tests added)
});
