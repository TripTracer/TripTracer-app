import { render, waitFor } from '@testing-library/react-native';

import AvatarImage from './AvatarImage';

describe('AvatarImage', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <AvatarImage
        source={{ uri: 'https://example.com/image.jpg' }}
        size={100}
        testID='test-avatar-image'
      />,
    );
    waitFor(() => {
      const avatarImage = getByTestId('test-avatar-image');
      expect(avatarImage).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const { getByTestId } = render(
      <AvatarImage
        source={{ uri: 'https://example.com/image.jpg' }}
        size={100}
        style={{ borderWidth: 2 }}
        theme={{ colors: { primary: 'blue' } }}
        testID='test-avatar-image'
      />,
    );
    waitFor(() => {
      const avatarImage = getByTestId('test-avatar-image');
      expect(avatarImage.props.source).toEqual({
        uri: 'https://example.com/image.jpg',
      });
      expect(avatarImage.props.size).toBe(100);
      expect(avatarImage.props.style.borderWidth).toBe(2);
      expect(avatarImage.props.theme.colors.primary).toBe('blue');
    });
  });
});
