import { forwardRef } from 'react';
import { Avatar } from 'react-native-paper';

import { AvatarIconProps } from '../../../utils/types';

const AvatarIcon = forwardRef<any, AvatarIconProps>(function AvatarIcon(
  { icon, size, color, style, theme, testID, ...rest }: AvatarIconProps,
  ref: React.Ref<any> | null,
) {
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
