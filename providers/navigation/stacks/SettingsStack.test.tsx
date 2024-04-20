import { render, waitFor } from '@testing-library/react-native';

import NavigationProvider from '../NavigationProvider';
import SettingsStackScreen from './SettingsStack';

describe('SettingsStack', () => {
  it('should render the SettingsStack navigator with the correct screens', () => {
    const { getByText } = render(
      <NavigationProvider>
        <SettingsStackScreen />
      </NavigationProvider>,
    );
    waitFor(() => {
      expect(getByText('Settings Screen')).toBeTruthy();
      expect(getByText('Details Screen')).toBeTruthy();
    });
  });
});
