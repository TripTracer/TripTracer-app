import 'react-native-gesture-handler';
import ThemeProvider from './providers/Theme';
import NavigationProvider from './providers/Navigation';
import { StatusBar } from 'expo-status-bar';
import QueryProvider from './providers/ReactQuery';

export default function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <NavigationProvider />
        <StatusBar style='auto' />
      </ThemeProvider>
    </QueryProvider>
  );
}
