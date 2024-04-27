import { render, waitFor } from '@testing-library/react-native';

import CardContent from './CardContent';

describe('CardContent', () => {
  it('renders correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <CardContent testID='test-card-content'>
          <Text>Card Content</Text>
        </CardContent>,
      );
      const cardContent = getByTestId('test-card-content');
      expect(cardContent).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <CardContent
          id='card-content-1'
          style={{ backgroundColor: 'red' }}
          testID='test-card-content'
        >
          <Text>Card Content</Text>
        </CardContent>,
      );
      const cardContent = getByTestId('test-card-content');
      expect(cardContent.props.id).toBe('card-content-1');
      expect(cardContent.props.style.backgroundColor).toBe('red');
      expect(cardContent.props.testID).toBe('test-card-content');
    });
  });
});
