import 'react-native-gesture-handler';
import ThemeProvider from './providers/Theme';
import NavigationProvider from './providers/navigation/NavigationProvider';
import { StatusBar } from 'expo-status-bar';
import QueryProvider from './providers/ReactQuery';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18next from './utils/i18next/index';

export default function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <QueryProvider>
        <ThemeProvider>
          <NavigationProvider />
          <StatusBar style='auto' />
        </ThemeProvider>
      </QueryProvider>
    </I18nextProvider>
  );
}
