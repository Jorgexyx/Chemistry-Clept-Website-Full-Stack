import React, { Fragment } from "react"
import {Grid, Container } from '@material-ui/core';
import Header from './Header'
import { CssBaseline } from '@material-ui/core'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


const client = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
});

const Layout = ({children}) => {
  return(
    <Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Grid container>
          <ApolloProvider client={client}>
            {children}
          </ApolloProvider>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default Layout
