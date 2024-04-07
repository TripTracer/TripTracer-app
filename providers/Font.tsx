import React, { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts, Vazirmatn_900Black } from '@expo-google-fonts/vazirmatn';
import * as SplashScreen from 'expo-splash-screen';

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
    console.log('fontsLoaded: ', fontsLoaded);
    console.log('fontError: ', fontError);
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    console.log('fontError: ', fontError);
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
