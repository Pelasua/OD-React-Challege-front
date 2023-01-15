import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { api } from '../../../adapters/api'

function PageDetails () {
  const [page, setpage] = useState(null)

  useEffect(() => {
    api
      .get('http://localhost:3001/get-pages')
      .then((result) => {
        if (!result.length) {
          throw new Error('No results available')
        }
        setpage(result[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log(page)
  }, [page])

  return (
    <Box>
      {page && (
        <Box>
          <Grid
            container
            css={css`
              position: relative;
              height: 300px;
              background-image: url("${page.pageImage}");
              background-position: center;
              color: white;
            `}
          >
            <Box
              css={css`
                position: absolute;
                height: 100%;
                width: 100%;
                background-color: rgba(73, 16, 173, 0.82);
              `}
            ></Box>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              css={css`
                z-index: 999;
                padding: 30px;
                padding-top: 0;
              `}
            >
              <Grid item>
                <Typography variant="h5">{page.pageName}</Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              >
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="flex-start"
                  spacing={1}
                  xs={8}
                >
                  <Grid item container direction="row" spacing={1}>
                    <Grid item>
                      <Typography variant="body2">
                        By: {page.pageAuthor}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        At: {page.pageLocation}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">On: {page.pageDate}</Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="flex-end"
                  spacing={1}
                  xs={4}
                  css={css`
                    & svg {
                      font-size: 16px;
                    }
                  `}
                >
                  <Grid item>
                    <Typography variant="overline">
                      <FavoriteIcon /> {page.totalLikes}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="overline">
                      <ChatBubbleIcon /> {page.totalComments}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box
            css={css`
              background-color: red;
              min-height: 100%;
              width: 100%;
            `}
          ></Box>
        </Box>
      )}
    </Box>
  )
}

export default PageDetails
