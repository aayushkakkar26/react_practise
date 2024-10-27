import { useState } from "react";

export default function Toggle({ init }) {
  const [toggle, setToggle] = useState(init);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  return (
    <>
      <button onClick={handleToggle}>{toggle ? "ON" : "OFF"}</button>
    </>
  );
}
