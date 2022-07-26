import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const getData = async () => {
    // const data = await fetch();
    // setData(data);
  }

  useEffect(() => {
    // effect

    if (counter1 % 2 === 0) {
      setCounter2(counter1);    
    }

    return () => {
      // unsubscribe 
      // clear the global state
    }
  }, []);

  const increaseCounter = () => {
    setCounter1(counter1 + 1);
  }

  const decreaseCounter = () => {
    setCounter1(counter1 - 1)
  }

  return (
    <Layout>
      <p>Counter 1: {counter1}</p>      
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <p>Counter 2: {counter2}</p>
    </Layout>

  );
}

export default App;
