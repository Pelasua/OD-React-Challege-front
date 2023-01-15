import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'

function GalleryItem ({ type, content }) {
  const videoItem = (
    <Box
      data-testid='videoItem'
      css={css`
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url("${content}");
        background-size: cover;
        background-position: center;
      `}
    >
      <IconButton
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          & svg {
            font-size: 80px;
            opacity: 0.6;
            color: white;
          }
        `}
      >
        <PlayCircleOutlineIcon />
      </IconButton>
      <IconButton
        css={css`
          position: absolute;
          right: 0%;
          bottom: 0%;

          & svg {
            font-size: 30px;
            opacity: 0.6;
            color: white;
          }
        `}
      >
        <ThumbUpAltIcon />
      </IconButton>
    </Box>
  )

  const photoItem = (
    <Box
      data-testid='photoItem'
      css={css`
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        & > img {
          width: 100%;
        }
      `}
    >
      <IconButton
        css={css`
          position: absolute;
          right: 0%;
          bottom: 0%;

          & svg {
            font-size: 30px;
            opacity: 0.6;
            color: white;
          }
        `}
      >
        <ThumbUpAltIcon />
      </IconButton>
      <img src={content} />
    </Box>
  )

  return (
    <Box
      data-testid='galleryItem'
      css={css`
        width: calc(100% - 40px);
        height: 250px;
        padding: 10px 20px;
      `}
    >
      {type === 'photo' ? photoItem : videoItem}
    </Box>
  )
}
GalleryItem.propTypes = {
  type: PropTypes.oneOf(['photo', 'video']).isRequired,
  content: PropTypes.string.isRequired
}

export default GalleryItem
