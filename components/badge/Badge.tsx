import { forwardRef } from 'react';
import { Badge as BadgeNativePaper } from 'react-native-paper';

import { BadgeProps } from '../../utils/types';

const Badge = forwardRef(function Badge({
  visible,
  children,
  size,
  style,
  theme,
  testID,
  ref,
  ...rest
}: BadgeProps) {
  return (
    <BadgeNativePaper
      visible={visible}
      size={size}
      style={style}
      theme={theme}
      testID={testID}
      ref={ref}
      {...rest}
    >
      {children}
    </BadgeNativePaper>
  );
});
export default Badge;
