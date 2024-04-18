import { createContext } from 'react';

export const PreferencesContext = createContext({
  colorScheme: 'system',
  setColorScheme: (colorScheme: string) => {},
});
