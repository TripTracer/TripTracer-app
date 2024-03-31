import React from 'react';
import { View, Text, useColorScheme, Appearance } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { useAppTheme, useMaterial3ThemeContext } from '../providers/Theme';

const HomeScreen: React.FC = () => {
  const { updateTheme, resetTheme } = useMaterial3ThemeContext();
  const colorScheme2 = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  // react-native-paper theme is always in sync
  const theme = useAppTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
      }}
    >
      <Text>Home Screen</Text>
      <Text>useColorScheme2(): {colorScheme2}</Text>
      <Text>useColorScheme(): {colorScheme}</Text>
      <View style={{ backgroundColor: theme.colors.background }}>
        {/* Update theme by generating a new one based on #3E8260 color */}
        <Button onPress={() => updateTheme('#3E8260')}>Update theme</Button>
        {/* Reset theme to default (system or fallback) */}
        <Button onPress={() => resetTheme()}>Reset theme</Button>
      </View>
    </View>
  );
};

export default HomeScreen;
