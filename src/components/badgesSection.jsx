import React from "react";
import html5 from "../img/html5.png";
import jsImg from "../img/js.png";
import css3 from "../img/css3.png";
import jqImg from "../img/jq.png";
import tailwindImg from "../img/tailwind.png";
import BadgeC from "./smallComps/badgeConditional.jsx";

/* export default function BadgesSection() {
  return (
    <article
      id="badges"
      className="w-full bg-templateGray flex flex-col items-center"
    >
      <div className="mt-20 mx-2 text-center text-3xl">
        Tech Stack I'm comfortable in
      </div>
      <div className="mx-5 mt-5">
        <div className="pt-5 bg-gray-300 rounded-3xl shadow-inner text-center pb-3">
          <ul className=" badge-list flex justify-around flex-wrap first:px-5">
            <Badge size={"20"} imgPadding={2} img={html5} text={"HTML5"} />
            <Badge size={"20"} imgPadding={2} img={jsImg} text={"JavaScript"} />
            <Badge size={"20"} imgPadding={2} img={css3} text={"CSS3"} />
          </ul>
          <span className=" text-inset font-black text-sm ">
            The Harry Potter Trio of the Web Development
          </span>
        </div>
        <div className="text-center mt-5">
          <span className=" text-2xl">What I Used Before</span>
          <ul className="flex flex-wrap justify-around pt-5 ">
            <Badge img={jqImg} text={"jQuery"} />
            <Badge img={tailwindImg} text={"Tailwind CSS"} />
          </ul>
        </div>
      </div>
    </article>
  );
}
 */

export default function BadgesSection() {
  return (
    <article
      id="badges"
      className="w-full bg-templateGray flex flex-col items-center"
    >
      <div className="mt-20 mx-2 text-center text-3xl">
        Tech Stack I'm comfortable in
      </div>
      <div className="mx-5 mt-5">
        <div className="pt-5 bg-gray-300 rounded-3xl shadow-inner text-center pb-3">
          <ul className=" badge-list flex justify-around flex-wrap first:px-5">
            <BadgeC size={"sm"} img={jsImg} text={"JavaScript"} />
            <BadgeC size={"sm"} img={html5} text={"HTML5"} />
            <BadgeC size={"sm"} img={css3} text={"CSS3"} />
          </ul>
          <span className=" text-inset font-black text-sm ">
            The Harry Potter Trio of the Web Development
          </span>
        </div>
        <div className="text-center mt-5">
          <span className=" text-2xl">What I Used Before</span>
          <ul className="flex flex-wrap justify-around pt-5 ">
            <BadgeC size={"lg"} img={jqImg} text={"jQuery"} />
            <BadgeC size={"lg"} img={tailwindImg} text={"Tailwind CSS"} />
          </ul>
        </div>
      </div>
    </article>
  );
}
