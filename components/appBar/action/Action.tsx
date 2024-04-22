import React, { forwardRef } from 'react'; // Added React import
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

import { iActionProps } from '../../../utils/types/components/appBar';

const Action = forwardRef<View, iActionProps>(function Action(
  {
    id,
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
  }: iActionProps,
  ref: React.Ref<View> | null,
) {
  return (
    <Appbar.Action
      id={id}
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
