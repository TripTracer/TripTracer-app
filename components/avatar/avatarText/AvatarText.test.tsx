import { render, waitFor } from '@testing-library/react-native';

import AvatarText from './AvatarText';

describe('AvatarText', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <AvatarText
        label='JD'
        size={80}
        color='blue'
        testID='test-avatar-text'
      />,
    );
    waitFor(() => {
      const avatarText = getByTestId('test-avatar-text');
      expect(avatarText).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const { getByTestId } = render(
      <AvatarText
        label='JD'
        size={80}
        color='blue'
        style={{ backgroundColor: 'red' }}
        labelStyle={{ fontWeight: 'bold' }}
        maxFontSizeMultiplier={2}
        theme={{ colors: { primary: 'green' } }}
        testID='test-avatar-text'
      />,
    );
    waitFor(() => {
      const avatarText = getByTestId('test-avatar-text');
      expect(avatarText.props.label).toBe('JD');
      expect(avatarText.props.size).toBe(80);
      expect(avatarText.props.color).toBe('blue');
      expect(avatarText.props.style.backgroundColor).toBe('red');
      expect(avatarText.props.labelStyle.fontWeight).toBe('bold');
      expect(avatarText.props.maxFontSizeMultiplier).toBe(2);
      expect(avatarText.props.theme.colors.primary).toBe('green');
    });
  });
});
