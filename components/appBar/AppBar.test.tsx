import { Text } from 'react-native-paper';

import { render, waitFor } from '@testing-library/react-native';

import AppBar from './AppBar';

describe('AppBar', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <AppBar>
        <Text>Test Children</Text>
      </AppBar>,
    );
    expect(getByText('Test Children')).toBeTruthy();
  });

  it('applies props correctly', () => {
    const { getByTestId } = render(
      <AppBar
        dark={true}
        mode='outlined'
        elevated={false}
        safeAreaInsets={{ top: 10, bottom: 10 }}
        theme={{ colors: { primary: 'blue' } }}
        style={{ backgroundColor: 'red' }}
        testID='test-appbar'
      >
        <Text>Test Children</Text>
      </AppBar>,
    );
    waitFor(() => {
      const appBar = getByTestId('test-appbar');
      expect(appBar.props.dark).toBe(true);
      expect(appBar.props.mode).toBe('outlined');
      expect(appBar.props.elevated).toBe(false);
      expect(appBar.props.safeAreaInsets).toEqual({ top: 10, bottom: 10 });
      expect(appBar.props.theme.colors.primary).toBe('blue');
      expect(appBar.props.style.backgroundColor).toBe('red');
    });
  });
});
