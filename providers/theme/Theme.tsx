import * as SplashScreen from 'expo-splash-screen';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Appearance } from 'react-native';
import {
  adaptNavigationTheme,
  configureFonts,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';

import { useFonts, Vazirmatn_900Black } from '@expo-google-fonts/vazirmatn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import { ColorSchemeContext } from '../../utils/PreferencesContext';

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

  const [colorScheme, setColorScheme] = useState('light');

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

  if (fontsLoaded && fontError) {
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
