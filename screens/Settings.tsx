import React from 'react';
import { View, useColorScheme, Appearance } from 'react-native';
import { Button, useTheme, Text } from 'react-native-paper';
import ThemeChanger from '../components/settingsScreen/ThemeChanger';
import { SettingsScreenNavigationProps } from '../utils/types';
import { useTranslation } from 'react-i18next';
import LanguageChanger from '../components/settingsScreen/LanguageChanger';
const SettingsScreen = ({ navigation }: SettingsScreenNavigationProps) => {
  const colorScheme2 = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const { t, i18n } = useTranslation();

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
      <LanguageChanger />
      <Text>{t('hello')}</Text>
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
