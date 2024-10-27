import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((counter) => counter + 2);
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
