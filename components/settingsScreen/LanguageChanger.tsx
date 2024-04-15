import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageChanger = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    i18n.changeLanguage(lng);
    await AsyncStorage.setItem('language', lng);
  };
  return (
    <View>
      <Text>Language Changer</Text>
      <Button mode='contained' onPress={() => changeLanguage('fa')}>
        fa
      </Button>
      <Button mode='contained' onPress={() => changeLanguage('en')}>
        en
      </Button>
    </View>
  );
};
export default LanguageChanger;
