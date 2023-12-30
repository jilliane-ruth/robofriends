import React from "react";

const Scroll = (props) => {
  return (
    <div>
      <div
        style={{
          overflowY: "scroll",
          border: "1px solid black",
          height: "500px",
          borderColor: "#ff7626",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Scroll;
