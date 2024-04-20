import { forwardRef } from 'react';
import { Avatar } from 'react-native-paper';

import { AvatarTextProps } from '../../../utils/types';

const AvatarText = forwardRef<any, AvatarTextProps>(function AvatarText(
  {
    label,
    size,
    color,
    style,
    labelStyle,
    maxFontSizeMultiplier,
    theme,
    testID,
    ...rest
  }: AvatarTextProps,
  ref: React.Ref<any> | null,
) {
  return (
    <Avatar.Text
      label={label}
      size={size}
      color={color}
      style={style}
      labelStyle={labelStyle}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      theme={theme}
      testID={testID}
      ref={ref}
      {...rest}
    />
  );
});
export default AvatarText;
