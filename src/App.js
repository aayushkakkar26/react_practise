// Scroll down and which component you wanna run just uncomment it
import React from "react";
import Items from "./components/Items";
import Multiple from "./components/Multiple";
import Search from "./components/Search";
import DebouncedSearch from "./components/DebouncedSearch";
import CounterInit from "./components/CounterInit";
import Form from "./components/Form";
import List from "./components/List";
import Toggle from "./components/Toggle"
import Counter from "./components/Counter"
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Mango" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

export default function App() {


  return (
    <>
      <Items items={items} />
      {/* <Multiple /> */}
      {/* <Search /> */}
      {/* <DebouncedSearch /> */}
      {/* <CounterInit /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <List /> */}
      {/* <Toggle /> */}
    </>
  );
}
