import React from 'react';
import App from './App';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react-native';
import QueryProvider from './providers/reactQuery/ReactQuery';
import ThemeProvider from './providers/theme/Theme';
import NavigationProvider from './providers/navigation/NavigationProvider';
import { StatusBar } from 'expo-status-bar';
import '@jest/globals'; // Add this line

jest.mock('./providers/reactQuery/ReactQuery', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./providers/theme/Theme', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./providers/navigation/NavigationProvider', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('expo-status-bar', () => ({
  __esModule: true,
  StatusBar: jest.fn(),
}));
describe('<App />', () => {
  it('should render the app with necessary components', () => {
    render(<App />);
    waitFor(() => {
      expect(QueryProvider).toHaveBeenCalled();
      expect(ThemeProvider).toHaveBeenCalled();
      expect(NavigationProvider).toHaveBeenCalled();
      expect(StatusBar).toHaveBeenCalled();
    });
  });
  it('should render nothing if font loading fails', () => {
    render(<App />);
    waitFor(() => {
      expect(App).not.toHaveBeenCalled();
    });
  });
});
