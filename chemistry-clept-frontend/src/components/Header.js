import React from "react"
import SearchIcon from '@material-ui/icons/Search'
import { Typography, InputBase} from '@material-ui/core'
import { Paper, Grid, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const AppBarStyle ={
  backgroundColor: "#004d40"
}

const SearchStyle = {
  paddingLeft: "10px"
}

const linkStyle = {
  textDecoration: "none",
  color: "inherit"
}

const Header = () => {
  return(
    <AppBar position="static" style={AppBarStyle}>
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography  variant="h6" noWrap>
              <Link to="/" style={linkStyle}>Chemistry Clept Practice Questions</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Paper>
              <Grid container justify="space-around" alignItems="center" spacing={1} style={SearchStyle}>
                <Grid item> <SearchIcon /> </Grid>
                <Grid item> 
                   <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search clept website' }}
                  />
                </Grid>

              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
