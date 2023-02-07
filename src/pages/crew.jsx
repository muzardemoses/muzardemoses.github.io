import React from "react";
import { useState } from "react";
import "../assets/styles/crew.css";
import { destinations } from "../assets/data/data.js";
import Image from "../components/image";
export const Crew = () => {
  const [crewMembers] = useState(destinations.crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crewMembers[value];

  return (
    <section className="crew-main">
      <article className="first-half">
        <h1 className="crew-h1">
          <span className="num-d">02</span>
          <span className="h1-text">Meet your crew</span>
        </h1>
        <div className="c-content">
          <h3 className="role">{role}</h3>
          <h2 className="name">{name}</h2>
          <p className="bio">{bio}</p>
        </div>
        <div className="small-button">
          {crewMembers.map((crew, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`small-b ${index === value && "small-b-active"}`}
              >
                {}
              </button>
            );
          })}
        </div>
      </article>
      <article className="second-half">
        <Image src={images.webp} alt={name} title={name} className="c-image" />
        <span className="c-line"></span>
      </article>
    </section>
  );
};
