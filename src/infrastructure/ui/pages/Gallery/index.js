import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import { api } from '../../../adapters/api'
import GalleryItem from '../../components/GalleryItem'

function Gallery () {
  const [optionSelected, setoptionSelected] = useState(0)
  const [galleryItems, setgalleryItems] = useState(null)

  const handleChange = (event, newValue) => {
    setoptionSelected(newValue)
  }

  useEffect(() => {
    api
      .get('http://localhost:3001/get-gallery')
      .then((result) => {
        if (!result || !result.photos || !result.videos) {
          throw new Error('No results available')
        }
        setgalleryItems(optionSelected === 0 ? result.videos : result.photos)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Box
      css={css`
        padding-top: 70px;
      `}
    >
      {galleryItems && (
        <>
          <Box
            css={css`
              border-bottom: 1px solid;
              border-color: rgba(0, 0, 0, 0.12);
            `}
          >
            <Tabs
              value={optionSelected}
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
          <Box
            css={css`
              height: calc(100vh - 139px);
              margin-top: 20px;
              overflow-y: scroll;
            `}
          >
            {galleryItems.map((item) => (
                <GalleryItem key={item.id} type={optionSelected === 0 ? 'video' : 'photo'} content={item.data} />
            ))}
          </Box>
        </>
      )}
    </Box>
  )
}

export default Gallery
