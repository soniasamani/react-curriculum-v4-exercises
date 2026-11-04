export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// Explanation:
// Child receives the onIncrement function through props.
// Clicking the button calls the parent's increment function.
// Child does not directly modify the parent's state.
