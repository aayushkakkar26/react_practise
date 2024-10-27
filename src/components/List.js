import { useState } from "react";

export default function List() {
  const [listItems, setListItems] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    // Check if the input is not empty and not a duplicate
    if (input.trim() && !listItems.includes(input.trim())) {
      setListItems([...listItems, input.trim()]); // Add the new item
      setInput(""); // Clear the input field
    }
  }

  function handleRemove() {
    if (listItems.length > 0) {
      const newList = listItems.slice(0, -1); // Remove the last item
      setListItems(newList);
    }
  }

  function handleClear() {
    setListItems([]); // Clear the entire list
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove} disabled={listItems.length === 0}>
        Remove
      </button>
      <button onClick={handleClear}>Clear</button>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
