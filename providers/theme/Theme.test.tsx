import ThemeProvider from './Theme';
import {
  render,
  screen,
  waitFor,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1376e07 (feat: theme unit tests added)
=======
>>>>>>> b5a2cfb (feat: theme unit tests added)
=======
>>>>>>> 9851c96 (feat: theme unit tests added)
=======
=======
>>>>>>> 1376e07 (feat: theme unit tests added)
>>>>>>> 9789212 (feat: theme unit tests added)
  renderHook,
} from '@testing-library/react-native';
import { Text } from 'react-native-paper';
import { PreferencesContext } from '../prefrencesContext/PreferencesContext';
import { useContext } from 'react';
import * as SplashScreen from 'expo-splash-screen';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9789212 (feat: theme unit tests added)
=======
>>>>>>> f46e10f (feat: theme unit tests added)
=======
>>>>>>> 1376e07 (feat: theme unit tests added)
<<<<<<< HEAD
=======
>>>>>>> 00e1a5a (feat: theme unit tests added)
=======
>>>>>>> b5a2cfb (feat: theme unit tests added)
=======
=======
>>>>>>> f46e10f (feat: theme unit tests added)
>>>>>>> 9851c96 (feat: theme unit tests added)
=======
>>>>>>> 9789212 (feat: theme unit tests added)
  fireEvent,
  renderHook,
  act,
} from '@testing-library/react-native';
import '@testing-library/jest-dom';
import '@testing-library/react-native/extend-expect';
import { Button, Text } from 'react-native-paper';
import { PreferencesContext } from '../prefrencesContext/PreferencesContext';
import { useContext } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Fonts from '@expo-google-fonts/vazirmatn';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9789212 (feat: theme unit tests added)
>>>>>>> 07c3b61 (feat: theme unit tests added)
=======
>>>>>>> f46e10f (feat: theme unit tests added)
=======
>>>>>>> 07c3b61 (feat: theme unit tests added)
>>>>>>> 1376e07 (feat: theme unit tests added)
<<<<<<< HEAD
=======
>>>>>>> 00e1a5a (feat: theme unit tests added)
=======
>>>>>>> 07c3b61 (feat: theme unit tests added)
>>>>>>> b5a2cfb (feat: theme unit tests added)
=======
>>>>>>> 07c3b61 (feat: theme unit tests added)
=======
>>>>>>> f46e10f (feat: theme unit tests added)
>>>>>>> 9851c96 (feat: theme unit tests added)
=======
>>>>>>> 9789212 (feat: theme unit tests added)

describe('ThemeProvider Component', () => {
  it('should render children', () => {
    const children = <Text>Test Children</Text>;
    render(<ThemeProvider>{children}</ThemeProvider>);
    waitFor(() => {
      expect(screen.getByText('Test Children')).toBeInTheDocument();
    });
  });
  it('should toggle theme when preference changes', () => {
    // Arrange
    const { result } = renderHook(() => useContext(PreferencesContext), {
      wrapper: ThemeProvider,
    });
    const { toggleTheme, isThemeDark } = result.current || {};

    // Act
    waitFor(() => toggleTheme());
    // act(() => toggleTheme());

    // Assert
    waitFor(() => expect(result.current.isThemeDark).toBe(!isThemeDark));
  });
  it('should combine navigation and paper themes for light and dark modes', () => {
    // Arrange
    const children = <Text testID='text-id'>Test Children</Text>;
    const { getByTestId } = render(<ThemeProvider>{children}</ThemeProvider>);

    // Act
    waitFor(() => {
      const theme = getByTestId('text-id').style;
      // Assert
      expect(theme).toHaveProperty('fontFamily', 'Vazirmatn_900Black');
      expect(theme).toHaveProperty('colors');
      expect(theme.colors).toHaveProperty('primary');
      expect(theme.colors).toHaveProperty('background');
      expect(theme.colors).toHaveProperty('surface');
      expect(theme.colors).toHaveProperty('accent');
    });
  });
  it('should hide splash screen after fonts are loaded', async () => {
    // Arrange
    const children = <div>Test Children</div>;
    const SplashScreenMock = jest.spyOn(SplashScreen, 'hideAsync');

    // Act
    render(<ThemeProvider>{children}</ThemeProvider>);

    // Assert
    await waitFor(() => expect(SplashScreenMock).toHaveBeenCalled());
  });
});
