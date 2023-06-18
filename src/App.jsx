import React, { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
  const [value, setValue] = useState("");

  const [arr, setArr] = useState([]);

  const deleteItem = (id) => {
    console.log("delete");

    setArr((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const update = (e) => {
    setValue(e.target.value);
  };

  const change = () => {
    setArr((oldItems) => {
      return [...oldItems, value];
    });
    setValue("");
  };

  return (
    <div>
      <div className="main-container">
        {" "}
        <input
          type="text"
          placeholder="enter text"
          value={value}
          onChange={update}
        />
        <button onClick={change}>+</button>
      </div>

      <ol>
        {arr.map((curValue, index) => {
          return (
            <Todolist
              text={curValue}
              key={index}
              id={index}
              onSelect={deleteItem}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default App;
