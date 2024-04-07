import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18next from '../utils/i18next';
import { LanguageContext } from '../utils/PreferencesContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import { use } from 'i18next';

const I18next = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');
  const fetchLanguage = async () => {
    try {
      const storedLanguage = await AsyncStorage.getItem('language');
      console.log('storedLanguage:', storedLanguage);
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
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </LanguageContext.Provider>
  );
};
export default I18next;
