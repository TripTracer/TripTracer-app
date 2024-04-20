import { Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { render, waitFor } from '@testing-library/react-native';

import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <SafeAreaProvider>
        <Header testID='test-header'>
          <Text>Test Children</Text>
        </Header>
      </SafeAreaProvider>,
    );
    waitFor(() => {
      const header = getByTestId('test-header');
      expect(header).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const { getByTestId } = render(
      <SafeAreaProvider>
        <Header
          dark={true}
          statusBarHeight={20}
          mode='outlined'
          elevated={false}
          theme={{ colors: { primary: 'blue' } }}
          style={{ backgroundColor: 'red' }}
          testID='test-header'
        >
          <Text>Test Children</Text>
        </Header>
      </SafeAreaProvider>,
    );
    waitFor(() => {
      const header = getByTestId('test-header');
      expect(header.props.dark).toBe(true);
      expect(header.props.statusBarHeight).toBe(20);
      expect(header.props.mode).toBe('outlined');
      expect(header.props.elevated).toBe(false);
      expect(header.props.theme.colors.primary).toBe('blue');
      expect(header.props.style.backgroundColor).toBe('red');
    });
  });
});
