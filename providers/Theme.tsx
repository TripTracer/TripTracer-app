import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
  configureFonts,
} from 'react-native-paper';
import { PreferencesContext } from './PreferencesContext';
import { useCallback, useMemo, useState } from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { Vazirmatn_900Black, useFonts } from '@expo-google-fonts/vazirmatn';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontsLoaded, fontError] = useFonts({
    Vazirmatn_900Black,
  });

  console.log('fontsLoaded: ', fontsLoaded);
  console.log('fontError: ', fontError);
  if (fontsLoaded || fontError) {
    SplashScreen.hideAsync();
  }

  const fontConfig = {
    fontFamily: 'Vazirmatn_900Black',
  };

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
    },
  };

  const [isThemeDark, setIsThemeDark] = useState(false);

  let paperTheme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );
  if (!fontsLoaded && !fontError) {
    console.log('fontError: ', fontError);
    return null;
  } else {
    return (
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={paperTheme}>{children}</PaperProvider>
      </PreferencesContext.Provider>
    );
  }
}
