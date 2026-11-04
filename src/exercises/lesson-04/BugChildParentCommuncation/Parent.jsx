import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previous) => previous + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

// Explanation:
// Parent owns the count state and increment function.
// It passes increment to Child through the onIncrement prop.
// When Child calls this function, Parent updates its state
// and React re-renders the displayed counter.
