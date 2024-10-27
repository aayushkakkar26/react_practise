import { useState, useEffect } from "react";
import "./Items.css";

export default function Items({ items }) {
  const [allItems, setAllItems] = useState(items)
  const [selItems, setSelItems] = useState([])

  function handleSelect(id) {
    const item = allItems.find((items) => items.id === id)
    if (!selItems.find((selItem) => selItem.id === id)) {

      setSelItems([...selItems, item])
      const newItemarray = allItems.filter((items) => items.id !== id)
      setAllItems(newItemarray)
    }
  }

  function handleDeselect(id) {
    const item = selItems.find((item) => item.id === id)
    setAllItems([...allItems, item])

    const newItemarray = selItems.filter((items) => items.id !== id)
    setSelItems(newItemarray)
  }

  return (
    <>
      <div className="container">
        <div className="selected">
          <h4>Selected Items</h4>
          {selItems.length === 0 ? <p>No items are selected</p> : selItems.map((items) => {
            return <button key={items.id} onClick={() => handleDeselect(items.id)}>{items.name}</button>
          })}
        </div>

        <div className="allItems">
          <h4>All Items</h4>
          {allItems.length === 0 ? <p>All items are selected</p> : allItems.map((items) => {
            return <button key={items.id} onClick={() => handleSelect(items.id)}>{items.name}</button>
          })}


        </div>
      </div>
    </>
  );
}
