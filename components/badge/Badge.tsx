import { forwardRef } from 'react';
import { Animated } from 'react-native';
import { Badge as BadgeNativePaper } from 'react-native-paper';

import { iBadgeProps } from '../../utils/types/components/badge';

const Badge = forwardRef<typeof Animated.Text, iBadgeProps>(function Badge(
  { id, visible, children, size, style, theme, testID, ...rest }: iBadgeProps,
  ref: React.Ref<any> | null | React.RefObject<typeof Animated.Text>,
) {
  return (
    <BadgeNativePaper
      id={id}
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
