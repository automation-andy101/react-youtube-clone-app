import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { Videos, SideBar } from './index.js';
import { fetchFromAPI } from '../utils/FetchFromAPI.js';


const Feed = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const fetchVideoData = async() => {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
        setVideos(data.items);
      });
    }
    fetchVideoData();
  }, [selectedCategory]);

  return (

    // Normally flex direction is set to 'column', on medium and larger devices flex direction is set to 'row'
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row'}}}>

      {/* Normally height is set to 'auto', on medium and larger devices height is set to a view height of '92vh' */}
      <Box sx={{ 
        height: { sx: 'auto', md: '92vh' },  
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 }  
      }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

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

      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{
            color: 'white'
          }}>
            {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
          </Typography>

          <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed;
