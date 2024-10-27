import { useState } from "react";

export default function CounterInit() {
  // Lazy initialization of state using a function
  const [count, setCount] = useState(() => {
    console.log("Computing initial state...");
    return expensiveComputation(); // The function runs only once
  });

  function expensiveComputation() {
    // Simulating an expensive operation
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    return result; // This expensive calculation only happens on the first render
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
