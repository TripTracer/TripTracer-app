import React from 'react';
import { View, Text, useColorScheme, Appearance } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const HomeScreen = ({ navigation }: any) => {
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
      <Text>Home Screen</Text>
      <Text>useColorScheme2(): {colorScheme2}</Text>
      <Text>useColorScheme(): {colorScheme}</Text>
      <Button
        icon='camera'
        mode='contained'
        onPress={() => navigation.navigate('SettingsStack')}
      >
        Go to Settings
      </Button>
    </View>
  );
};

export default HomeScreen;
