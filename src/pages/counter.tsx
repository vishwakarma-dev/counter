import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { VSAsyncButton, VSButton, VSRow, VSTextbox, VSValue } from './styled';
import { fetchCount } from './counterAPI';

function VSCounter() {
  const [count, setCount] = React.useState<number>(0);
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function IncrementByAmount(amount: number) {
    setCount(count + amount);
  }

  function IncrementIfOdd() {
    if (count % 2 === 1) { 
      IncrementByAmount(incrementValue);
    }
  }

  async function IncrementAsync(amount: number) {
    const response = await fetchCount(amount);
    const newAmount = response.data;
    
    IncrementByAmount(newAmount);
  } 


  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <VSRow>
        <VSButton variant="contained" color="inherit" onClick={Decrement}>
          <RemoveIcon />
        </VSButton>
        <VSValue variant="h3">{count}</VSValue>
        <VSButton variant="contained" color="inherit" onClick={Increment}>
          <AddIcon />
        </VSButton>
      </VSRow>
      <VSRow justifyContent={"center"}>
        <VSTextbox
          label="Set increment amount"
          type='number'
          variant="outlined"
          size='small'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </VSRow>
      <VSRow>
        <VSButton
          variant="contained"
          color="inherit"
          onClick={() => IncrementByAmount(incrementValue)}
        >
          Add Amount
        </VSButton>
        <VSAsyncButton
          className="async-button"
          variant="contained"
          color="inherit"
          onClick={() => IncrementAsync(incrementValue)}
        >
          Add Async
        </VSAsyncButton>
        <VSButton
          variant="contained"
          color="inherit"
          onClick={IncrementIfOdd}
        >
          Add If Odd
        </VSButton>
      </VSRow>
    </Box>
  );
}

export default VSCounter;
