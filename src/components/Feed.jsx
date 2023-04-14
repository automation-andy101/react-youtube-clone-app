import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';


const Feed = () => {
  const [] = useState();
  

  return (

    // Normally flex direction is set to 'column', on medium and larger devices flex direction is set to 'row'
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row'}}}>

      {/* Normally height is set to 'auto', on medium and larger devices height is set to a view height of '92vh' */}
      <Box sx={{ 
        height: { sx: 'auto', md: '92vh' },  
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 }  
      }}>
        <SideBar />

        <Typography 
          className='copyright' 
          variant='body2' 
          sx={{ 
            mt: 1.5,
            color: '#fff'
          }}
        >
          Copyright 2023 Andy Short
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed;
