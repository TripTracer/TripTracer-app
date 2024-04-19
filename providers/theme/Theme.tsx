import * as SplashScreen from 'expo-splash-screen';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Appearance } from 'react-native';
import {
  adaptNavigationTheme,
  configureFonts,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';

import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import {
  useFonts,
  Vazirmatn_100Thin,
  Vazirmatn_200ExtraLight,
  Vazirmatn_300Light,
  Vazirmatn_400Regular,
  Vazirmatn_500Medium,
  Vazirmatn_600SemiBold,
  Vazirmatn_700Bold,
  Vazirmatn_800ExtraBold,
  Vazirmatn_900Black,
} from '@expo-google-fonts/vazirmatn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import { ColorSchemeContext } from '../prefrencesContext/PreferencesContext';

SplashScreen.preventAutoHideAsync();

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [fontsLoaded, fontError] = useFonts({
    Vazirmatn_900Black,
    Vazirmatn_800ExtraBold,
    Vazirmatn_700Bold,
    Vazirmatn_600SemiBold,
    Vazirmatn_500Medium,
    Vazirmatn_400Regular,
    Vazirmatn_300Light,
    Vazirmatn_200ExtraLight,
    Vazirmatn_100Thin,
    Roboto_900Black,
    Roboto_900Black_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
  });

  if (fontsLoaded || fontError) {
    SplashScreen.hideAsync();
  }

  const { t, i18n } = useTranslation();

  const fontConfigFa = {
    fontFamily: 'Vazirmatn_400Regular',
  };
  const fontConfigEn = {
    fontFamily: 'Roboto_400Regular',
  };

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    fonts: configureFonts({
      config: i18n.language === 'fa' ? fontConfigFa : fontConfigEn,
    }),
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    fonts: configureFonts({
      config: i18n.language === 'fa' ? fontConfigFa : fontConfigEn,
    }),
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

  const fetchColorScheme = async () => {
    try {
      const storedColorScheme = await AsyncStorage.getItem('colorScheme');
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
  useEffect(() => {
    fetchColorScheme();
  }, []);

  if (fontsLoaded && !fontError) {
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
