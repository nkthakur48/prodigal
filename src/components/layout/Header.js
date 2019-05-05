import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Header(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Search bar here
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
