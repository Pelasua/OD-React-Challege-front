import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'

function UserPost ({
  userName,
  profilePictureUrl,
  post,
  date,
  likes,
  responses
}) {
  return (
    <Box
      css={css`
        padding: 15px;
      `}
    >
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={3}>
          <Box
            css={css`
              width: 100%;

              & img {
                width: 100%;
              }
            `}
          >
            <img src={profilePictureUrl}></img>
          </Box>
        </Grid>
        <Grid item xs={9} container direction="column" spacing={1}>
          <Grid item>
            <Typography variant="h6">{userName}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{post}</Typography>
          </Grid>
          <Grid item container justifyContent='flex-start' spacing={3} css={css`
              & svg {
                font-size:12px;
              }
            `}>
            <Grid item>
              <Typography variant="caption"><WatchLaterIcon/> {date}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption"><FavoriteIcon/> {likes}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption"><ChatBubbleIcon/> {responses}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

UserPost.propTypes = {
  userName: PropTypes.string.isRequired,
  profilePictureUrl: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  responses: PropTypes.string.isRequired
}

export default UserPost
