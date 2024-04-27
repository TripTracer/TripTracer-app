import { render, waitFor } from '@testing-library/react-native';

import Card from './Card';

describe('Card', () => {
  it('renders correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <Card testID='test-card'>This is a card</Card>,
      );
      const card = getByTestId('test-card');
      expect(card).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const mockPress = jest.fn();
    waitFor(() => {
      const { getByTestId } = render(
        <Card
          id='card1'
          mode='outlined'
          onLongPress={() => {}}
          onPress={mockPress}
          onPressIn={() => {}}
          onPressOut={() => {}}
          delayLongPress={1000}
          disabled={false}
          elevation={3}
          contentStyle={{ padding: 10 }}
          style={{ backgroundColor: 'red' }}
          theme={{ colors: { primary: 'blue' } }}
          testID='test-card'
          accessible={true}
        >
          This is a card
        </Card>,
      );
      const card = getByTestId('test-card');
      expect(card.props.id).toBe('card1');
      expect(card.props.mode).toBe('outlined');
      expect(card.props.onLongPress).toEqual(expect.any(Function));
      expect(card.props.onPress).toBe(mockPress);
      expect(card.props.onPressIn).toEqual(expect.any(Function));
      expect(card.props.onPressOut).toEqual(expect.any(Function));
      expect(card.props.delayLongPress).toBe(1000);
      expect(card.props.disabled).toBe(false);
      expect(card.props.elevation).toBe(3);
      expect(card.props.contentStyle.padding).toBe(10);
      expect(card.props.style.backgroundColor).toBe('red');
      expect(card.props.theme.colors.primary).toBe('blue');
      expect(card.props.testID).toBe('test-card');
      expect(card.props.accessible).toBe(true);
    });
  });
});
