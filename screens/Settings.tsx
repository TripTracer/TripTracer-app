import React from 'react';
import { View, Text, useColorScheme, Appearance } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import ThemeChanger from '../components/settingsScreen/ThemeChanger';
import { SettingsScreenNavigationProps } from '../utils/types';

const SettingsScreen = ({ navigation }: SettingsScreenNavigationProps) => {
  const colorScheme2 = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
      }}
    >
      <Text>Settings Screen</Text>
      <Text>useColorScheme2(): {colorScheme2}</Text>
      <Text>useColorScheme(): {colorScheme}</Text>
      <ThemeChanger />
      <Button
        icon='camera'
        mode='contained'
        onPress={() => navigation.navigate('Details')}
      >
        Go to Details
      </Button>
    </View>
  );
};

export default SettingsScreen;
