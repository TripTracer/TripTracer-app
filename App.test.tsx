import React from 'react';
<<<<<<< HEAD
=======
import renderer from 'react-test-renderer';
<<<<<<< HEAD
>>>>>>> 07c3b61 (feat: theme unit tests added)
=======
>>>>>>> f46e10f (feat: theme unit tests added)
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  it('should render the app with the necessary components', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should not render the QueryProvider, ThemeProvider, and NavigationProvider components', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
>>>>>>> 07c3b61 (feat: theme unit tests added)
=======
  it('should render the app with the necessary components', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should not render the QueryProvider, ThemeProvider, and NavigationProvider components', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
>>>>>>> f46e10f (feat: theme unit tests added)
  });
});
