import { forwardRef } from 'react';
import { Avatar } from 'react-native-paper';

import { iAvatarIconProps } from '../../../utils/types/components/avatar';

const AvatarIcon = forwardRef<any, iAvatarIconProps>(function AvatarIcon(
  { id, icon, size, color, style, theme, testID, ...rest }: iAvatarIconProps,
  ref: React.Ref<any> | null,
) {
  return (
    <Avatar.Icon
      id={id}
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
