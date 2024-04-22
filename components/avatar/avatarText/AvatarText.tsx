import { forwardRef } from 'react';
import { Avatar } from 'react-native-paper';

import { iAvatarTextProps } from '../../../utils/types/components/avatar';

const AvatarText = forwardRef<any, iAvatarTextProps>(function AvatarText(
  {
    id,
    label,
    size,
    color,
    style,
    labelStyle,
    maxFontSizeMultiplier,
    theme,
    testID,
    ...rest
  }: iAvatarTextProps,
  ref: React.Ref<any> | null,
) {
  return (
    <Avatar.Text
      id={id}
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
