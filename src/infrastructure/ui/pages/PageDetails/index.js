/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import * as styles from './styles.scss'

function PageDetails () {
  return (
    <Box className="detail-page" css={css`${styles}`}>
      <Box className="detail-page__header">
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h6" gutterBottom>
              h1. Heading
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            spacing={3}
          >
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              spacing={1}
              xs={7}
            >
              <Grid item container direction="row" spacing={2}>
                <Grid item>By: Alan Tiger</Grid>
                <Grid item>At Paris, France</Grid>
              </Grid>
              <Grid item>On: March 31st, 2016</Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              xs={5}
            >
              <Grid item>Likes</Grid>
              <Grid item>Comments</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default PageDetails
