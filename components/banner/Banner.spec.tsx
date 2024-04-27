import { render, waitFor } from '@testing-library/react-native';

import Banner from './Banner';

describe('Banner', () => {
  it('renders correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <Banner
          visible={true}
          testID='test-banner'
        >
          This is a banner
        </Banner>,
      );
      const banner = getByTestId('test-banner');
      expect(banner).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    waitFor(() => {
      const { getByTestId } = render(
        <Banner
          id='banner1'
          visible={true}
          icon='bell'
          actions={[{ label: 'Dismiss', onPress: () => {} }]}
          contentStyle={{ backgroundColor: 'red' }}
          elevation={4}
          maxFontSizeMultiplier={2}
          style={{ marginBottom: 10 }}
          theme={{ colors: { primary: 'blue' } }}
          onShowAnimationFinished={() => {}}
          onHideAnimationFinished={() => {}}
          testID='test-banner'
        >
          This is a banner
        </Banner>,
      );
      const banner = getByTestId('test-banner');
      expect(banner.props.id).toBe('banner1');
      expect(banner.props.visible).toBe(true);
      expect(banner.props.icon).toBe('bell');
      expect(banner.props.actions).toEqual([
        { label: 'Dismiss', onPress: expect.any(Function) },
      ]);
      expect(banner.props.contentStyle.backgroundColor).toBe('red');
      expect(banner.props.elevation).toBe(4);
      expect(banner.props.maxFontSizeMultiplier).toBe(2);
      expect(banner.props.style.marginBottom).toBe(10);
      expect(banner.props.theme.colors.primary).toBe('blue');
      expect(banner.props.onShowAnimationFinished).toEqual(
        expect.any(Function),
      );
      expect(banner.props.onHideAnimationFinished).toEqual(
        expect.any(Function),
      );
    });
  });
});
