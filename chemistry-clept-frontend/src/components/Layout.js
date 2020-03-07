import React, { Fragment } from "react"
import {Grid, Container } from '@material-ui/core';
import Header from './Header'
import { CssBaseline } from '@material-ui/core'
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: ,
});
const Layout = ({children}) => {
  return(
    <Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Grid container>
          {children}
        </Grid>
      </Container>
    </Fragment>
  )
}

export default Layout
