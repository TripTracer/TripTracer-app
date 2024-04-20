import { fireEvent, render, waitFor } from '@testing-library/react-native';

import Content from './Content';

describe('Content', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Content
        title='Test Title'
        titleStyle={{ fontWeight: 'bold' }}
        onPress={() => console.log('Content pressed')}
        testID='test-content'
      />,
    );
    waitFor(() => {
      const content = getByTestId('test-content');
      expect(content).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <Content
        title='Test Title'
        titleStyle={{ fontWeight: 'bold' }}
        onPress={mockPress}
        disabled={true}
        color='blue'
        titleMaxFontSizeMultiplier={2}
        testID='test-content'
      />,
    );
    waitFor(() => {
      const content = getByTestId('test-content');
      expect(content.props.title).toBe('Test Title');
      expect(content.props.titleStyle.fontWeight).toBe('bold');
      expect(content.props.onPress).toBe(mockPress);
      expect(content.props.disabled).toBe(true);
      expect(content.props.color).toBe('blue');
      expect(content.props.titleMaxFontSizeMultiplier).toBe(2);
    });
  });

  it('calls onPress handler when clicked', () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <Content
        title='Test Title'
        onPress={mockPress}
        testID='test-content'
      />,
    );
    waitFor(() => {
      const content = getByTestId('test-content');
      fireEvent.press(content);
      expect(mockPress).toHaveBeenCalled();
    });
  });
});
