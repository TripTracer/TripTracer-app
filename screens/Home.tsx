import React from 'react';
import { View, Text, useColorScheme, Appearance } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { PreferencesContext } from '../providers/PreferencesContext';

const HomeScreen: React.FC = ({ navigation }) => {
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
      <Text>Home Screen</Text>
      <Text>useColorScheme2(): {colorScheme2}</Text>
      <Text>useColorScheme(): {colorScheme}</Text>
      <Button
        icon='camera'
        mode='contained'
        onPress={() => navigation.navigate('Settings')}
      >
        Go to Settings
      </Button>
    </View>
  );
};

export default HomeScreen;
