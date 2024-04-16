import { useColorScheme, Appearance } from 'react-native';
import { Switch, useTheme } from 'react-native-paper';
import { PreferencesContext } from '../../providers/prefrencesContext/PreferencesContext';
import { useContext } from 'react';

const ThemeChanger = () => {
  const colorScheme2 = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

  return (
    <Switch color={'red'} value={isThemeDark} onValueChange={toggleTheme} />
  );
};

export default ThemeChanger;
