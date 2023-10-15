import React from 'react';
import logo from './logo.svg';
import './App.css';
import VSCounter from './pages/counter';
import { Box, Card, Container } from '@mui/material';
import VSFooter from './components/footer';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <Container maxWidth="sm">
            <img src={logo} className="App-logo" alt="logo" />
            <Card elevation={12}>
              <Box padding={3}>
                <VSCounter />
              </Box>
            </Card>
          </Container>
        <VSFooter />
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
