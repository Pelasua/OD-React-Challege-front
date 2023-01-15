import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

function Gallery () {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      css={css`
        padding-top: 70px;
      `}
    >
      <Box
        css={css`
          border-bottom: 1px solid;
          border-color: rgba(0, 0, 0, 0.12);
        `}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          css={css`
            & .css-1aquho2-MuiTabs-indicator {
              height: 3px;
              background-color: rgb(164, 125, 214);
            }
            & .css-1ujykiq-MuiButtonBase-root-MuiTab-root {
              font-weight: bold;
              &.Mui-selected {
                color: gray;
              }
            }
          `}
        >
          <Tab label="Videos" />
          <Tab label="Photos" />
        </Tabs>
      </Box>
    </Box>
  )
}

export default Gallery
