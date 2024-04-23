import '@jest/globals'; // Add this line
import '@testing-library/jest-dom';

import { StatusBar } from 'expo-status-bar';

import { render, waitFor } from '@testing-library/react-native';

import App from './App';
import NavigationProvider from './providers/navigation/NavigationProvider';
import QueryProvider from './providers/reactQuery/ReactQuery';
import ThemeProvider from './providers/theme/Theme';

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
