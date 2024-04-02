import React from 'react';
import { View, Text, useColorScheme, Appearance } from 'react-native';
import { Button, Switch, useTheme } from 'react-native-paper';
import { PreferencesContext } from '../providers/PreferencesContext';
import ThemeChanger from '../components/settingsScreen/ThemeChanger';

const SettingsScreen: React.FC = ({ navigation }) => {
  const colorScheme2 = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  // react-native-paper theme is always in sync
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
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
