import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col border rounded-md p-4 mr-10 w-60">
      {props.icon}
      <div className="font-semibold">{props.content}</div>
    </div>
  );
}

export default Card;
