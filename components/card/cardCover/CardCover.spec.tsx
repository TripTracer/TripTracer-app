import { render, waitFor } from '@testing-library/react-native';

import CardCover from './CardCover';

describe('CardCover', () => {
  it('renders correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(<CardCover testID='test-card-cover' />);
      const cardCover = getByTestId('test-card-cover');
      expect(cardCover).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <CardCover
          id='card-cover-1'
          style={{ width: 200, height: 100 }}
          testID='test-card-cover'
        />,
      );
      const cardCover = getByTestId('test-card-cover');
      expect(cardCover.props.id).toBe('card-cover-1');
      expect(cardCover.props.style.width).toBe(200);
      expect(cardCover.props.style.height).toBe(100);
      expect(cardCover.props.testID).toBe('test-card-cover');
    });
  });
});
