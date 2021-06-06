import React from 'react';
import Box from '@material-ui/core/Box';

export default function BasicComponent() {
  return (
    <div style={{ width: 600 }}>
      <Box component="div" my={2} whiteSpace="normal" bgcolor="background.paper">
        Basic component. Some text for CRM explanation.
      </Box>
    </div>
  );
}