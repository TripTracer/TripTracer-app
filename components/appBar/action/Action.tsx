import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { ActionProps } from '../../../utils/types';

const Action = forwardRef(function Action({
  color,
  rippleColor,
  icon,
  size,
  disabled,
  accessibilityLabel,
  onPress,
  isLeading,
  style,
  ref,
  theme,
}: ActionProps) {
  return (
    <Appbar.Action
      color={color}
      rippleColor={rippleColor}
      icon={icon}
      size={size}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      isLeading={isLeading}
      style={style}
      ref={ref}
      theme={theme}
    />
  );
});
export default Action;
