import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { ContentProps } from '../../../utils/types';

const Content = forwardRef(function Content({
  title,
  titleStyle,
  titleRef,
  onPress,
  disabled,
  color,
  titleMaxFontSizeMultiplier,
  style,
  theme,
  testID,
  ref,
  ...rest
}: ContentProps) {
  return (
    <Appbar.Content
      title={title}
      titleStyle={titleStyle}
      titleRef={titleRef}
      onPress={() => onPress}
      disabled={disabled}
      color={color}
      titleMaxFontSizeMultiplier={titleMaxFontSizeMultiplier}
      style={style}
      theme={theme}
      testID={testID}
      ref={ref}
      {...rest}
    />
  );
});
export default Content;
