import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import I18next from './providers/i18next/I18Next';
import NavigationProvider from './providers/navigation/NavigationProvider';
import QueryProvider from './providers/reactQuery/ReactQuery';
import ThemeProvider from './providers/theme/Theme';

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
