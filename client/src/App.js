import React, {useRef, useEffect} from 'react';
import {TweenMax} from 'gsap';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
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
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
  }, [])

  return (
    <div className="app" ref={el => app = el}>
      <ThemeProvider theme={theme}>
        <Nav />
        <Banner />
        <Services />
        <About />
        <Contact />
        <Forms />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
