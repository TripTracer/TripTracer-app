import ThemeProvider from './providers/Theme';
import NavigationProvider from './providers/Navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider />
      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
