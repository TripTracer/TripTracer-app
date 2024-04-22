import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'setimmediate';

import { render, waitFor } from '@testing-library/react-native';

import NavigationProvider from '../NavigationProvider';
import SettingsStackScreen from './SettingsStack';

describe('SettingsStack', () => {
  it('should render the SettingsStack navigator with the correct screens', () => {
    waitFor(() => {
      const { getByText } = render(
        <NavigationProvider>
          <SettingsStackScreen />
        </NavigationProvider>,
      );
      expect(getByText('Settings Screen')).toBeTruthy();
      expect(getByText('Details Screen')).toBeTruthy();
    });
  });
});
