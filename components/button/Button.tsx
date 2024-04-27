import { forwardRef } from 'react';
import { Button as RNPButton } from 'react-native-paper';

import { iButtonProps } from '../../types/components/button';

const Button = forwardRef<any, iButtonProps>(function Button(
  {
    id,
    mode,
    dark,
    compact,
    buttonColor,
    textColor,
    rippleColor,
    loading,
    icon,
    disabled,
    children,
    uppercase,
    background,
    accessibilityLabel,
    accessibilityHint,
    accessibilityRole,
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    delayLongPress,
    contentStyle,
    maxFontSizeMultiplier,
    style,
    labelStyle,
    theme,
    testID,
    ...rest
  }: iButtonProps,
  ref: React.Ref<any>,
) {
  return (
    <RNPButton
      id={id}
      mode={mode}
      dark={dark}
      compact={compact}
      buttonColor={buttonColor}
      textColor={textColor}
      rippleColor={rippleColor}
      loading={loading}
      icon={icon}
      disabled={disabled}
      uppercase={uppercase}
      background={background}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      delayLongPress={delayLongPress}
      contentStyle={contentStyle}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      style={style}
      labelStyle={labelStyle}
      theme={theme}
      testID={testID}
      ref={ref}
      {...rest}
    >
      {children}
    </RNPButton>
  );
});
export default Button;
