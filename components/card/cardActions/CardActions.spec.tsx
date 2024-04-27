import { render, waitFor } from '@testing-library/react-native';

import CardActions from './CardActions';

describe('CardActions', () => {
  it('renders correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <CardActions testID='test-card-actions'>
          <Text>Card Actions</Text>
        </CardActions>,
      );
      const cardActions = getByTestId('test-card-actions');
      expect(cardActions).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <CardActions
          id='card-actions-1'
          style={{ backgroundColor: 'red' }}
          theme={{ colors: { primary: 'blue' } }}
          testID='test-card-actions'
        >
          <Text>Card Actions</Text>
        </CardActions>,
      );
      const cardActions = getByTestId('test-card-actions');
      expect(cardActions.props.id).toBe('card-actions-1');
      expect(cardActions.props.style.backgroundColor).toBe('red');
      expect(cardActions.props.theme.colors.primary).toBe('blue');
      expect(cardActions.props.testID).toBe('test-card-actions');
    });
  });
});
