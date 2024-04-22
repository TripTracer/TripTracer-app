import { forwardRef } from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

import { iBackActionProps } from '../../../utils/types/components/appBar';

const BackAction = forwardRef<View, iBackActionProps>(function BackAction(
  {
    id,
    color,
    size,
    disabled,
    accessibilityLabel,
    onPress,
    style,
    testID,
    ...rest
  }: iBackActionProps,
  ref: React.Ref<View> | React.RefObject<View> | null,
) {
  return (
    <Appbar.BackAction
      id={id}
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
