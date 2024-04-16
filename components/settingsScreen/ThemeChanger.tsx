import { useContext } from 'react';
import { Switch } from 'react-native-paper';

import { PreferencesContext } from '../../providers/prefrencesContext/PreferencesContext';

const ThemeChanger = () => {
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

  return <Switch color='red' value={isThemeDark} onValueChange={toggleTheme} />;
};

export default ThemeChanger;
