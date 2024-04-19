import * as Updates from 'expo-updates';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nManager, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

import LanguageChanger from '../components/settingsScreen/LanguageChanger';
import ThemeChanger from '../components/settingsScreen/ThemeChanger';
import { SettingsScreenNavigationProps } from '../utils/types';

const SettingsScreen = ({ navigation }: SettingsScreenNavigationProps) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    const updateRTL = async () => {
      const currentRTL = I18nManager.isRTL;
      const newRTL = i18n.dir(i18n.language) === 'rtl';

      if (newRTL !== currentRTL) {
        await I18nManager.forceRTL(newRTL);
        Updates.reloadAsync(); // Reload the app to apply RTL changes
      }
    };

    updateRTL();
  }, [i18n.language]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>Settings Screen</Text>

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
      <Text>{I18nManager.isRTL ? ' RTL' : ' LTR'}</Text>
    </View>
  );
};

export default SettingsScreen;
