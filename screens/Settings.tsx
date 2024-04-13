import { useTranslation } from 'react-i18next';
import { Appearance, useColorScheme, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

import LanguageChanger from '../components/settingsScreen/LanguageChanger';
import ThemeChanger from '../components/settingsScreen/ThemeChanger';
import { SettingsScreenNavigationProps } from '../utils/types';

const SettingsScreen = ({ navigation }: SettingsScreenNavigationProps) => {
  const colorScheme2 = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
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
