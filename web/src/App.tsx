import React from 'react';
//import './styles/global.css'
import 'leaflet/dist/leaflet.css';
import Routes from './routes';

import usePersistedState from './utils/usePersistedState';
import happy from './styles/themes/happy';
import darkky from './styles/themes/darkky';
import {ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';
import Header from './components/Header';


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',happy);

  const toggleTheme = () =>{
    setTheme(theme.title === 'happy' ? darkky : happy);    
  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />    
      <Header toggleTheme={toggleTheme} />
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
