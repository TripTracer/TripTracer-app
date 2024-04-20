import React, { forwardRef } from 'react'; // Added React import
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

import { ActionProps } from '../../../utils/types';

const Action = forwardRef<View, ActionProps>(function Action(
  {
    color,
    rippleColor,
    icon,
    size,
    disabled,
    accessibilityLabel,
    onPress,
    isLeading,
    style,
    theme,
    testID,
    ...rest
  }: ActionProps,
  ref: React.Ref<View> | null,
) {
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
      testID={testID}
      {...rest}
    />
  );
});

export default Action;
