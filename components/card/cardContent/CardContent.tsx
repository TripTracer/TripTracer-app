import { forwardRef } from 'react';
import { Card } from 'react-native-paper';

import { iCardContentProps } from '../../../types/components/card';

const CardContent = forwardRef<any, iCardContentProps>(function CardContent(
  { id, children, style, testID, ...rest }: iCardContentProps,
  ref: React.Ref<any>,
) {
  return (
    <Card.Content
      id={id}
      style={style}
      testID={testID}
      ref={ref}
      {...rest}
    >
      {children}
    </Card.Content>
  );
});
export default CardContent;
