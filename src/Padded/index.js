import React from 'react';
import { Box } from '@material-ui/core';

export default ({ children, padding = 1, ...rest }) => (
  <Box p={padding} {...rest}>
    {children}
  </Box>
);
