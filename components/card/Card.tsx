import { forwardRef } from 'react';
import { Card as RNPCard } from 'react-native-paper';

import { iCardProps } from '../../types/components/card';

const Card = forwardRef<any, iCardProps>(function Card(
  {
    id,
    mode,
    children,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    delayLongPress,
    disabled,
    elevation,
    contentStyle,
    style,
    theme,
    testID,
    accessible,
    ...rest
  }: iCardProps,
  ref: React.Ref<any>,
) {
  return (
    <RNPCard
      id={id}
      mode={mode}
      onLongPress={onLongPress}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      delayLongPress={delayLongPress}
      disabled={disabled}
      elevation={elevation}
      contentStyle={contentStyle}
      style={style}
      theme={theme}
      testID={testID}
      accessible={accessible}
      ref={ref}
      {...rest}
    >
      {children}
    </RNPCard>
  );
});
export default Card;
