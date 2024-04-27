import { forwardRef } from 'react';
import { Card } from 'react-native-paper';

import { iCardActionsProps } from '../../../types/components/card';

const CardActions = forwardRef<any, iCardActionsProps>(function CardActions(
  {
    id,

    children,
    style,
    theme,
    testID,
    ...rest
  }: iCardActionsProps,
  ref: React.Ref<any>,
) {
  return (
    <Card.Actions
      id={id}
      style={style}
      theme={theme}
      testID={testID}
      ref={ref}
      {...rest}
    >
      {children}
    </Card.Actions>
  );
});
export default CardActions;
