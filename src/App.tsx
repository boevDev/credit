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
          <Button
            style={{
              borderRadius: '40px',
              color: 'white',
              fontFamily: 'Inter',
              fontSize: '16px',
              textTransform: 'none',
              padding: '16px 62px',
              lineHeight: '19px',
              maxWidth: '202px',
              margin: '0 auto',
            }}
            variant='contained'
          >
            Получить
          </Button>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
