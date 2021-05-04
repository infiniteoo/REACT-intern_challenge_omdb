import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'
import { Movie, Theaters } from '@material-ui/icons'
import useStyles from './AppStyles'


const App = () => {

    const classes = useStyles()

    return (
        <>
        <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Movie className={classes.iconLeft} />
          
          <Typography variant="h1"> movie of the year </Typography>

          <Movie className={classes.iconRight} />
        </Toolbar>
      </AppBar>
      </>
    )
}

export default App
