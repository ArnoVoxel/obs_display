import React from 'react';
import './App.css';
import GreenScreenAnimationContainer from './animations/GreenScreenAnimationContainer';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App" >
      <Box sx={{ height: '100vh', backgroundColor: '#00ff00' }}>
        <GreenScreenAnimationContainer />
      </Box>
    </div>
  );
}

export default App;
