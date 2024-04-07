import React from 'react';
import { View, useColorScheme, Appearance } from 'react-native';
import { Button, useTheme, Text } from 'react-native-paper';
import ThemeChanger from '../components/settingsScreen/ThemeChanger';
import { SettingsScreenNavigationProps } from '../utils/types';
import { useTranslation } from 'react-i18next';
const SettingsScreen = ({ navigation }: SettingsScreenNavigationProps) => {
  const colorScheme2 = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
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
      <Button mode='contained' onPress={() => changeLanguage('fa')}>
        fa
      </Button>
      <Button mode='contained' onPress={() => changeLanguage('en')}>
        en
      </Button>
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
