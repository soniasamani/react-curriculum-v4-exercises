import { useRef } from 'react';

// TOPIC: Correct useRef usage to control DOM elements
// TASK: Focus an input field when the button is clicked.

export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Explanation:
// useRef creates a reference to the input element.
// ref={inputRef} connects the reference to the input.
// When the button is clicked, inputRef.current.focus()
// moves keyboard focus to the input without a re-render.
