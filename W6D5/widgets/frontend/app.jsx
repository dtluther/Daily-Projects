import React from "react";

import Clock from "./clock";
import Weather from "./weather";
import Tabs from "./tabs";
import Autocomplete from "./autocomplete";

const Names = [
  "Abba",
  "Barney",
  "Barbara",
  "Jeff",
  "Jenny",
  "Sarah",
  "Sally",
  "Xander"
];

const Panes = [
  { title: "one", content: "I am the first" },
  { title: "two", content: "The middle child" },
  { title: "three", content: "Last, but certainly not least" }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <Tabs panes={Panes} />
        <Autocomplete names={Names} />
      </div>
    );
  }
}
export default App;
