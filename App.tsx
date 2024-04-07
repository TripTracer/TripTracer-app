import 'react-native-gesture-handler';
import ThemeProvider from './providers/Theme';
import NavigationProvider from './providers/navigation/NavigationProvider';
import { StatusBar } from 'expo-status-bar';
import QueryProvider from './providers/ReactQuery';
import I18next from './providers/I18next';

export default function App() {
  return (
    <I18next>
      <QueryProvider>
        <ThemeProvider>
          <NavigationProvider />
          <StatusBar style='auto' />
        </ThemeProvider>
      </QueryProvider>
    </I18next>
  );
}
