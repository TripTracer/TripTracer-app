import { useContext, useEffect, useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ColorSchemeContext } from '../../utils/PreferencesContext';

const ThemeChanger = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);
  const [value, setValue] = useState(colorScheme);

  const onValueChange = async (value: string) => {
    setColorScheme(value);
    setValue(value);
    try {
      await AsyncStorage.setItem('colorScheme', value);
    } catch (error) {
      console.error('Error saving theme to AsyncStorage:', error);
    }
  };

  const getCurrentTheme = async () => {
    try {
      const storedColorScheme = await AsyncStorage.getItem('colorScheme');
      if (storedColorScheme == null || storedColorScheme === 'system') {
        setColorScheme('system');
        setValue('system');
      } else {
        setColorScheme(storedColorScheme);
        setValue(storedColorScheme);
      }
    } catch (error) {
      console.error('Error loading theme from AsyncStorage:', error);
    }
  };
  useEffect(() => {
    getCurrentTheme();
  });
  return (
    <SegmentedButtons
      value={value}
      onValueChange={onValueChange}
      buttons={[
        {
          value: 'light',
          label: 'Light',
        },
        {
          value: 'dark',
          label: 'Dark',
        },
        { value: 'system', label: 'System Default' },
      ]}
    />
  );
};

export default ThemeChanger;
