import { render, waitFor } from '@testing-library/react-native';

import AvatarIcon from './AvatarIcon';

describe('AvatarIcon', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <AvatarIcon
        icon='check'
        size={24}
        color='blue'
        testID='test-avatar-icon'
      />,
    );
    waitFor(() => {
      const avatarIcon = getByTestId('test-avatar-icon');
      expect(avatarIcon).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const { getByTestId } = render(
      <AvatarIcon
        icon='check'
        size={24}
        color='blue'
        style={{ backgroundColor: 'red' }}
        theme={{ colors: { primary: 'green' } }}
        testID='test-avatar-icon'
      />,
    );
    waitFor(() => {
      const avatarIcon = getByTestId('test-avatar-icon');
      expect(avatarIcon.props.icon).toBe('check');
      expect(avatarIcon.props.size).toBe(24);
      expect(avatarIcon.props.color).toBe('blue');
      expect(avatarIcon.props.style.backgroundColor).toBe('red');
      expect(avatarIcon.props.theme.colors.primary).toBe('green');
    });
  });
});
