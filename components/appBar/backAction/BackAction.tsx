import { forwardRef } from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

import { BackActionProps } from '../../../utils/types';

const BackAction = forwardRef<View, BackActionProps>(function BackAction(
  {
    color,
    size,
    disabled,
    accessibilityLabel,
    onPress,
    style,
    testID,
    ...rest
  }: BackActionProps,
  ref: React.Ref<View> | React.RefObject<View> | null,
) {
  return (
    <Appbar.BackAction
      color={color}
      size={size}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      onPress={() => onPress}
      style={style}
      testID={testID}
      ref={ref}
      {...rest}
    />
  );
});
export default BackAction;
