import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { iContentProps } from '../../../utils/types/components/appBar';

const Content = forwardRef<any, iContentProps>(function Content(
  {
    id,
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
    ...rest
  }: iContentProps,
  ref: React.Ref<any> | null,
) {
  return (
    <Appbar.Content
      id={id}
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
