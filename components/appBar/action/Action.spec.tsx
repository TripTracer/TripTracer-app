import { fireEvent, render, waitFor } from '@testing-library/react-native';

import Action from './Action';

describe('Action', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Action
        color='blue'
        icon='check'
        size={24}
        accessibilityLabel='Test Action'
        onPress={() => console.log('Action pressed')}
        testID='test-action'
      />,
    );
    waitFor(() => {
      const action = getByTestId('test-action');
      expect(action).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <Action
        color='red'
        rippleColor='green'
        icon='close'
        size={20}
        disabled={true}
        accessibilityLabel='Test Action'
        onPress={mockPress}
        isLeading={true}
        theme={{ colors: { primary: 'blue' } }}
        testID='test-action'
      />,
    );
    waitFor(() => {
      const action = getByTestId('test-action');
      expect(action.props.color).toBe('red');
      expect(action.props.rippleColor).toBe('green');
      expect(action.props.icon).toBe('close');
      expect(action.props.size).toBe(20);
      expect(action.props.disabled).toBe(true);
      expect(action.props.accessibilityLabel).toBe('Test Action');
      expect(action.props.onPress).toBe(mockPress);
      expect(action.props.isLeading).toBe(true);
      expect(action.props.theme.colors.primary).toBe('blue');
    });
  });

  it('calls onPress handler when clicked', () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <Action
        color='blue'
        icon='check'
        size={24}
        accessibilityLabel='Test Action'
        onPress={mockPress}
        testID='test-action'
      />,
    );
    waitFor(() => {
      const action = getByTestId('test-action');
      fireEvent.press(action);
      expect(mockPress).toHaveBeenCalled();
    });
  });
});
