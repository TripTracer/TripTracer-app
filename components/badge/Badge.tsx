import { forwardRef } from 'react';
import { Animated } from 'react-native';
import { Badge as BadgeNativePaper } from 'react-native-paper';

import { BadgeProps } from '../../utils/types';

const Badge = forwardRef<typeof Animated.Text, BadgeProps>(function Badge(
  { visible, children, size, style, theme, testID, ...rest }: BadgeProps,
  ref: React.Ref<any> | null | React.RefObject<typeof Animated.Text>,
) {
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
