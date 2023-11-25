import React from 'react';
import './App.css';
import { Container, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Calc from './Components/Calc/Calc';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#28CA6C',
      },
      secondary: {
        main: '#28CA6C',
      },
    },
  });

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Container
          className='app__container'
          maxWidth='xs'
          style={{
            padding: '0 12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            height: '100%',
          }}
        >
          <Calc />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
