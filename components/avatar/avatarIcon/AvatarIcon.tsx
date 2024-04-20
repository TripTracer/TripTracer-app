import { forwardRef } from 'react';
import { Avatar } from 'react-native-paper';

import { AvatarIconProps } from '../../../utils/types';

const AvatarIcon = forwardRef(function AvatarIcon({
  icon,
  size,
  color,
  style,
  theme,
  testID,
  ref,
  ...rest
}: AvatarIconProps) {
  return (
    <Avatar.Icon
      icon={icon}
      size={size}
      color={color}
      style={style}
      theme={theme}
      testID={testID}
      ref={ref}
      {...rest}
    />
  );
});
export default AvatarIcon;
