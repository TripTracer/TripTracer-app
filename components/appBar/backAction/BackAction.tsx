import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { BackActionProps } from '../../../utils/types';

const BackAction = forwardRef(function BackAction({
  color,
  size,
  disabled,
  accessibilityLabel,
  onPress,
  style,
  ref,
}: BackActionProps) {
  return (
    <Appbar.BackAction
      color={color}
      size={size}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      onPress={() => onPress}
      style={style}
      ref={ref}
    />
  );
});
export default BackAction;
