import React, {
  useCallback,
  useMemo,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Appearance } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
  configureFonts,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ColorSchemeContext,
} from '../utils/PreferencesContext';
import { useFonts, Vazirmatn_900Black } from '@expo-google-fonts/vazirmatn';

SplashScreen.preventAutoHideAsync();

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [fontsLoaded, fontError] = useFonts({
    Vazirmatn_900Black,
  });
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

  const [colorScheme, setColorScheme] = useState('light'); // Default color scheme

  const preferences = useMemo(
    () => ({ colorScheme, setColorScheme }),
    [colorScheme, setColorScheme],
  );

  useEffect(() => {
    const fetchColorScheme = async () => {
      try {
        const storedColorScheme = await AsyncStorage.getItem('colorScheme');
        console.log('storedColorScheme:', storedColorScheme);
        if (
          storedColorScheme === 'dark' ||
          (storedColorScheme === null && Appearance.getColorScheme() === 'dark')
        ) {
          setColorScheme('dark');
        } else {
          setColorScheme('light');
        }
      } catch (error) {
        console.error('Error loading theme from AsyncStorage:', error);
      }
    };
    fetchColorScheme();
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    const paperTheme =
      colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
    return (
      <ColorSchemeContext.Provider value={preferences}>
        <PaperProvider theme={paperTheme}>{children}</PaperProvider>
      </ColorSchemeContext.Provider>
    );
  }
};

export default ThemeProvider;
