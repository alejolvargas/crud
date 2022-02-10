import React from "react";

const Message = ({ msg, bgColor }) => {
  console.log(bgColor);
  let style = {
    padding: "1em",
    textAlign: "center",
    color: "#fff",
    background: bgColor,
  };
  return (
    <div style={style}>
      <h2>{msg}</h2>
    </div>
  );
};

export default Message;
