import { render, waitFor } from '@testing-library/react-native';

import Badge from './Badge';

describe('Badge', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Badge testID='test-badge'>New</Badge>);
    waitFor(() => {
      const badge = getByTestId('test-badge');
      expect(badge).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const { getByTestId } = render(
      <Badge
        visible={true}
        size={20}
        style={{ backgroundColor: 'red' }}
        theme={{ colors: { primary: 'blue' } }}
        testID='test-badge'
      >
        New
      </Badge>,
    );
    waitFor(() => {
      const badge = getByTestId('test-badge');
      expect(badge.props.visible).toBe(true);
      expect(badge.props.size).toBe(20);
      expect(badge.props.style.backgroundColor).toBe('red');
      expect(badge.props.theme.colors.primary).toBe('blue');
    });
  });
});
