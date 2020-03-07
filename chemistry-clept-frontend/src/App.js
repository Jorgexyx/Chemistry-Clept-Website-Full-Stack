import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './components/Header'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#fafafa', height: '100vh' }} />
      </Container>
    </Fragment>
  );
}

export default App;
