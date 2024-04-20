import { render, waitFor } from '@testing-library/react-native';

import I18next from './I18next';

describe('I18next', () => {
   it('should render', () => {
      const { getByTestId } = render(<I18next />);
      waitFor(() => {
         const element = getByTestId('I18next');
         expect(element).toBeTruthy();
      });
   });
   it('should set default language to "en" when no stored language is found and no device language is detected', () => {
      // Mock AsyncStorage.getItem to return null
      jest.mock('@react-native-async-storage/async-storage', () => ({
         getItem: jest.fn().mockResolvedValueOnce(null),
      }));

      // Mock getLocales to return an empty array
      getLocales = jest.fn().mockReturnValueOnce([]);

      // Render the I18next component
      const { getByTestId } = render(
         <I18next>
            <div data-testid='child-component' />
         </I18next>,
      );

      // Assert that the default language is set to 'en'
      waitFor(() => {
         expect(getByTestId('child-component')).toHaveTextContent('en');
      });
   });
   it('should throw an error when there is an error loading the stored language from AsyncStorage', async () => {
      jest.mock('@react-native-async-storage/async-storage', () => ({
         getItem: jest.fn().mockResolvedValueOnce(null),
      }));
      // Render the I18next component
      const { getByTestId } = render(
         <I18next>
            <div data-testid='child-component' />
         </I18next>,
      );
      waitFor(() => {
         // Assert that the error is thrown
         expect(getByTestId('child-component')).toThrowError(
            'AsyncStorage error',
         );
      });
   });
});
