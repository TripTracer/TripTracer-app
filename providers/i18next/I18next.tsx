import { getLocales } from 'expo-localization';
import * as Updates from 'expo-updates';
import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { I18nManager } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import i18next from '../../utils/i18next';
import { LanguageContext } from '../prefrencesContext/PreferencesContext';

const I18next = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const languageRestart = async () => {
    if (i18n.language === 'fa') {
      if (!I18nManager.isRTL) {
        I18nManager.forceRTL(true);
        await Updates.reloadAsync();
      }
    } else {
      if (I18nManager.isRTL) {
        I18nManager.forceRTL(false);
        await Updates.reloadAsync();
      }
    }
  };
  const fetchLanguage = async () => {
    try {
      const storedLanguage = await AsyncStorage.getItem('language');
      if (storedLanguage === null) {
        const lng = getLocales()[0].languageCode;
        if (lng) {
          setLanguage(lng);
        } else {
          setLanguage('en');
        }
      } else {
        setLanguage(storedLanguage);
      }
      await languageRestart();
    } catch (error) {
      console.error('Error loading theme from AsyncStorage:', error);
    }
  };
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    fetchLanguage();
  }, []);
  useEffect(() => {
    changeLanguage(language);
  }, [i18n.language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </LanguageContext.Provider>
  );
};
export default I18next;
