import React from 'react';
import { createMuiTheme, ThemeProvider, 
  Container, makeStyles } from '@material-ui/core'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Forms from './components/Forms'
import Footer from './components/Footer'

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#00e5bf',
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
        <Contact />
        <Forms />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
