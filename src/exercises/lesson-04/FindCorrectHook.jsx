// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render

import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((previous) => previous + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// Explanation:
// useState is the correct hook because clickCount is displayed
// on the screen. Updating state tells React to re-render
// the component and display the new count.
// useRef can remember a value without triggering a re-render,
// so it would not automatically update the button text.
