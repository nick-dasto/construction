import React from 'react';
import { createMuiTheme, ThemeProvider, 
  Container, makeStyles } from '@material-ui/core'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Services from './components/Services'
import About from './components/About'

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#00e676',
    },
    secondary: {
      main: '#00bbe6',
    },
    type: 'dark'
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Nav />
        <Banner />
        <Services />
        <About />
    </ThemeProvider>
  );
}

export default App;
