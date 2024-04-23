import { fireEvent, render, waitFor } from '@testing-library/react-native';

import BackAction from './BackAction';

describe('BackAction', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <BackAction
        color='blue'
        size={24}
        accessibilityLabel='Back Button'
        onPress={() => console.log('Back button pressed')}
        testID='test-back-action'
      />,
    );
    waitFor(() => {
      const backAction = getByTestId('test-back-action');
      expect(backAction).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <BackAction
        color='red'
        size={20}
        disabled={true}
        accessibilityLabel='Back Button'
        onPress={mockPress}
        testID='test-back-action'
      />,
    );
    waitFor(() => {
      const backAction = getByTestId('test-back-action');
      expect(backAction.props.color).toBe('red');
      expect(backAction.props.size).toBe(20);
      expect(backAction.props.disabled).toBe(true);
      expect(backAction.props.accessibilityLabel).toBe('Back Button');
      expect(backAction.props.onPress).toBe(mockPress);
    });
  });

  it('calls onPress handler when clicked', () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <BackAction
        color='blue'
        size={24}
        accessibilityLabel='Back Button'
        onPress={mockPress}
        testID='test-back-action'
      />,
    );
    waitFor(() => {
      const backAction = getByTestId('test-back-action');
      fireEvent.press(backAction);
      expect(mockPress).toHaveBeenCalled();
    });
  });
});
