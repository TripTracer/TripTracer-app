import { forwardRef } from 'react';
import { Card } from 'react-native-paper';

import { iCardTitleProps } from '../../../types/components/card';

const CardTitle = forwardRef<any, iCardTitleProps>(function CardTitle(
  {
    id,
    title,
    titleStyle,
    titleNumberOfLines,
    titleVariant,
    subtitle,
    subtitleStyle,
    subtitleNumberOfLines,
    subtitleVariant,
    left,
    leftStyle,
    right,
    rightStyle,
    titleMaxFontSizeMultiplier,
    subtitleMaxFontSizeMultiplier,
    style,
    theme,
    testID,
    ...rest
  }: iCardTitleProps,
  ref: React.Ref<any>,
) {
  return (
    <Card.Title
      id={id}
      title={title}
      titleStyle={titleStyle}
      titleNumberOfLines={titleNumberOfLines}
      titleVariant={titleVariant}
      subtitle={subtitle}
      subtitleStyle={subtitleStyle}
      subtitleNumberOfLines={subtitleNumberOfLines}
      subtitleVariant={subtitleVariant}
      left={left}
      leftStyle={leftStyle}
      right={right}
      rightStyle={rightStyle}
      titleMaxFontSizeMultiplier={titleMaxFontSizeMultiplier}
      subtitleMaxFontSizeMultiplier={subtitleMaxFontSizeMultiplier}
      style={style}
      theme={theme}
      testID={testID}
      ref={ref}
      {...rest}
    />
  );
});
export default CardTitle;
