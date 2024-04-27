import { forwardRef } from 'react';
import { Banner as RNPBanner } from 'react-native-paper';

import { iBannerProps } from '../../types/components/banner';

const Banner = forwardRef<any, iBannerProps>(function Banner(
  {
    id,
    visible,
    children,
    icon,
    actions,
    contentStyle,
    elevation,
    maxFontSizeMultiplier,
    style,
    theme,
    onShowAnimationFinished,
    onHideAnimationFinished,
    testID,
    ref,
    ...rest
  }: iBannerProps,
  forwardedRef: React.Ref<any>,
) {
  return (
    <RNPBanner
      id={id}
      visible={visible}
      icon={icon}
      actions={actions}
      contentStyle={contentStyle}
      elevation={elevation}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      style={style}
      theme={theme}
      onShowAnimationFinished={onShowAnimationFinished}
      onHideAnimationFinished={onHideAnimationFinished}
      testID={testID}
      ref={ref}
      forwardedRef={forwardedRef}
      {...rest}
    >
      {children}
    </RNPBanner>
  );
});
export default Banner;
