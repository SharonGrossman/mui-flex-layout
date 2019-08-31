import React from 'react';
import Row from '../Row';

export default ({ color, children }) => (
  <Row bgcolor={color} height={'100%'} width={'100%'}>
    {children}
  </Row>
);
