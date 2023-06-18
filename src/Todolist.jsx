import React from "react";
import { ImCross } from "react-icons/im";

const Todolist = (props) => {
  return (
    <div>
      <li>
        {props.text}{" "}
        <ImCross
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </li>
    </div>
  );
};

export default Todolist;
