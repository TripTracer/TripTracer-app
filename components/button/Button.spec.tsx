import { render, waitFor } from '@testing-library/react-native';

import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <Button testID='test-button'>Press me</Button>,
      );
      const button = getByTestId('test-button');
      expect(button).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const mockPress = jest.fn();
    waitFor(() => {
      const { getByTestId } = render(
        <Button
          id='button1'
          mode='contained'
          dark={true}
          compact={true}
          buttonColor='blue'
          textColor='white'
          rippleColor='gray'
          loading={false}
          icon='check'
          disabled={false}
          uppercase={true}
          background='none'
          accessibilityLabel='Button'
          onPress={mockPress}
          contentStyle={{ padding: 10 }}
          maxFontSizeMultiplier={2}
          style={{ borderWidth: 2 }}
          labelStyle={{ fontWeight: 'bold' }}
          theme={{ colors: { primary: 'green' } }}
          testID='test-button'
        >
          Press me
        </Button>,
      );
      const button = getByTestId('test-button');
      expect(button.props.id).toBe('button1');
      expect(button.props.mode).toBe('contained');
      expect(button.props.dark).toBe(true);
      expect(button.props.compact).toBe(true);
      expect(button.props.buttonColor).toBe('blue');
      expect(button.props.textColor).toBe('white');
      expect(button.props.rippleColor).toBe('gray');
      expect(button.props.loading).toBe(false);
      expect(button.props.icon).toBe('check');
      expect(button.props.disabled).toBe(false);
      expect(button.props.uppercase).toBe(true);
      expect(button.props.background).toBe('none');
      expect(button.props.accessibilityLabel).toBe('Button');
      expect(button.props.onPress).toBe(mockPress);
      expect(button.props.contentStyle.padding).toBe(10);
      expect(button.props.maxFontSizeMultiplier).toBe(2);
      expect(button.props.style.borderWidth).toBe(2);
      expect(button.props.labelStyle.fontWeight).toBe('bold');
      expect(button.props.theme.colors.primary).toBe('green');
    });
  });
});
