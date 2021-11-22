import React from "react";

export default function ListEl(props) {
  return (
    <a href={props.link} className="block">
      <div className=" p-4 text-xl text-gray-200 text-center">{props.text}</div>
    </a>
  );
}
