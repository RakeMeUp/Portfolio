import React from "react";

export default function ListEl(props) {
  return (
    <li className=" p-4 text-xl text-gray-200 text-center">
      <a href={props.link}>{props.text}</a>
    </li>
  );
}
