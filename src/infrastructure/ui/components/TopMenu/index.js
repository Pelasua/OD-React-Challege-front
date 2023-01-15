import React, { useContext, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import MenuIcon from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

import { AppContext } from '../../../../App'

function TopMenu ({ title, isTransparent }) {
  const context = useContext(AppContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handlePage = (event) => {
    const page = event.target.getAttribute('data-page-name')

    context.actions.selectPage(page)
    setAnchorEl(null)
  }

  return (
    <AppBar
      className={`top-menu ${isTransparent ? 'transparent' : ''}`}
      position="static"
      css={css`
        position: fixed;
        z-index: 99999;
        box-shadow: none;
        background: rgb(164, 125, 214);
        background: linear-gradient(
          90deg,
          rgba(164, 125, 214, 1) 0%,
          rgba(145, 92, 212, 1) 37%,
          rgba(73, 16, 173, 1) 100%
        );

        & > .css-hyum1k-MuiToolbar-root{
          height: 70px;
        }

        &.transparent {
          background: transparent;
        }
      `}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          css={css`
          z-index: 99999;
            &
              > .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
              color: white;
              background: rgba(73, 16, 173, 1);

            }
          `}
        >
          <MenuItem data-page-name="gallery" onClick={handlePage}>
            Gallery
          </MenuItem>
          <MenuItem data-page-name="detailPage" onClick={handlePage}>
            Detail page
          </MenuItem>
        </Menu>
        <Typography
          variant="h7"
          component="div"
          align="center"
          css={css`
            flex-grow: 1;
            font-weight: bold;
            letter-spacing: 2px;
          `}
        >
          {title.toUpperCase()}
        </Typography>
        <IconButton
          size="large"
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

TopMenu.propTypes = {
  title: PropTypes.string.isRequired,
  isTransparent: PropTypes.bool
}

TopMenu.defaultProps = {
  isTransparent: false
}

export default TopMenu
