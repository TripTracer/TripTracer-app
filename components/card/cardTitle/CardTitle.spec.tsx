import { render, waitFor } from '@testing-library/react-native';

import CardTitle from './CardTitle';

describe('CardTitle', () => {
  it('renders correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <CardTitle
          testID='test-card-title'
          title='Title'
        />,
      );
      const cardTitle = getByTestId('test-card-title');
      expect(cardTitle).toBeTruthy();
      expect(cardTitle.props.title).toBe('Title');
    });
  });

  it('applies props correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <CardTitle
          id='card-title-1'
          title='Title'
          titleStyle={{ fontSize: 20 }}
          titleNumberOfLines={1}
          titleVariant='subtitle1'
          subtitle='Subtitle'
          subtitleStyle={{ color: 'red' }}
          subtitleNumberOfLines={2}
          subtitleVariant='body2'
          left={<Text>Left</Text>}
          leftStyle={{ marginRight: 10 }}
          right={<Text>Right</Text>}
          rightStyle={{ marginLeft: 10 }}
          titleMaxFontSizeMultiplier={2}
          subtitleMaxFontSizeMultiplier={1.5}
          style={{ backgroundColor: 'blue' }}
          theme={{ colors: { primary: 'green' } }}
          testID='test-card-title'
        />,
      );
      const cardTitle = getByTestId('test-card-title');
      expect(cardTitle.props.id).toBe('card-title-1');
      expect(cardTitle.props.title).toBe('Title');
      expect(cardTitle.props.titleStyle.fontSize).toBe(20);
      expect(cardTitle.props.titleNumberOfLines).toBe(1);
      expect(cardTitle.props.titleVariant).toBe('subtitle1');
      expect(cardTitle.props.subtitle).toBe('Subtitle');
      expect(cardTitle.props.subtitleStyle.color).toBe('red');
      expect(cardTitle.props.subtitleNumberOfLines).toBe(2);
      expect(cardTitle.props.subtitleVariant).toBe('body2');
      expect(cardTitle.props.left.type).toBe('Text');
      expect(cardTitle.props.left.props.children).toBe('Left');
      expect(cardTitle.props.leftStyle.marginRight).toBe(10);
      expect(cardTitle.props.right.type).toBe('Text');
      expect(cardTitle.props.right.props.children).toBe('Right');
      expect(cardTitle.props.rightStyle.marginLeft).toBe(10);
      expect(cardTitle.props.titleMaxFontSizeMultiplier).toBe(2);
      expect(cardTitle.props.subtitleMaxFontSizeMultiplier).toBe(1.5);
      expect(cardTitle.props.style.backgroundColor).toBe('blue');
      expect(cardTitle.props.theme.colors.primary).toBe('green');
      expect(cardTitle.props.testID).toBe('test-card-title');
    });
  });
});
