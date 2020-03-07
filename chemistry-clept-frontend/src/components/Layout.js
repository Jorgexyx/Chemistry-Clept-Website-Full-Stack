import React, { Fragment } from "react"
import Container from '@material-ui/core/Container';
import Header from './Header'
import { CssBaseline } from '@material-ui/core'
const Layout = ({children}) => {
  return(
    <Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        {children}
      </Container>
    </Fragment>
  )
}

export default Layout
