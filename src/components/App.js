import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [charLimit, setCharLimit] = useState(50);
  const [inputText, setInputText] = useState("I change");
  const [color, setColor] = useState("black");
  const [padding, setPadding] = useState(32);
  return (
    <form>
    <div id="main">
      Char Limit:-{" "}
      <input
        type="number"
        id="charlimit-input"
        defaultValue={charLimit}
        onChange={(e) => {
          setCharLimit(e.target.value);
        }}
      />
      <input
        type="color"
        defaultValue={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <input
        type="text"
        defaultValue={inputText}
        maxLength={charLimit}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <input
        type="range"
        defaultValue={padding}
        onChange={(e) => {
          setPadding(e.target.value + "px");
        }}
        min={1}
        max={32}
      />
      <div
        id="changing-div"
        style={{
          backgroundColor: color,
          color: "white",
          padding: padding,
          margin: "20px 0px",
        }}
      >
        {inputText}
      </div>
    </div>
</form>
  );
};

export default App;
