import * as React from 'react';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import VSCopyright from './copyright';

function VSFooter () {
  return (
    <React.Fragment>
      <Box
          component="footer"
          sx={{
            py: 5,
            px: 5,
            mt: '1.4rem',
          }}
        >
          <Container maxWidth="sm">
            <VSCopyright />
          </Container>
        </Box>
    </React.Fragment>
  );
}


export default VSFooter ;