import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

function Gallery () {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" >
          <Tab label="Videos" />
          <Tab label="Photos" />
        </Tabs>
      </Box>
    </div>
  )
}

export default Gallery
