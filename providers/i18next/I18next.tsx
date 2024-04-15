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

  const fetchLanguage = async () => {
    const storedLanguage = await AsyncStorage.getItem('language');
    console.log('storedLanguage', storedLanguage);
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
  };

  // const languageRestart = async () => {
  //   if (i18n.language === 'fa') {
  //     if (!I18nManager.isRTL) {
  //       I18nManager.forceRTL(true);
  //       await Updates.reloadAsync();
  //     }
  //   } else {
  //     if (I18nManager.isRTL) {
  //       I18nManager.forceRTL(false);
  //       await Updates.reloadAsync();
  //     }
  //   }
  // };
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };
  useEffect(() => {
    fetchLanguage().then(async () => {
      console.log('i18n.language', i18n.language);
      console.log('language', language);
      if (i18n.language !== language) {
        await changeLanguage(language);
      }
    });
  }, []);
  // useEffect(() => {
  //   changeLanguage(language);
  // }, [i18n.language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </LanguageContext.Provider>
  );
};
export default I18next;
