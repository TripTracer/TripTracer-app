import * as SplashScreen from 'expo-splash-screen';
import { useContext } from 'react';
import { Text } from 'react-native-paper';

import {
   act,
   render,
   renderHook,
   screen,
   waitFor,
} from '@testing-library/react-native';

import { ColorSchemeContext } from '../prefrencesContext/PreferencesContext';
import ThemeProvider from './Theme';

describe('ThemeProvider Component', () => {
   it('should render children', () => {
      const children = <Text>Test Children</Text>;
      render(<ThemeProvider>{children}</ThemeProvider>);
      waitFor(() => {
         expect(screen.getByText('Test Children')).toBeInTheDocument();
      });
   });
   // Toggles theme when preference changes
   it('should toggle theme when preference changes', () => {
      // Arrange
      const { result } = renderHook(() => useContext(ColorSchemeContext), {
         wrapper: ThemeProvider,
      });

      // Check if the context is not null before accessing its properties
      if (result.current !== null) {
         const { setColorScheme, colorScheme } = result.current;

         // Act
         act(() => {
            setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
         });
         // Assert
         waitFor(() => {
            expect(result.current.colorScheme).toBe(
               colorScheme === 'light' ? 'dark' : 'light',
            );
         });
      }
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
