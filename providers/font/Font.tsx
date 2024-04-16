import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { useFonts, Vazirmatn_900Black } from '@expo-google-fonts/vazirmatn';

SplashScreen.preventAutoHideAsync();

export default function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontsLoaded, fontError] = useFonts({
    Vazirmatn_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
