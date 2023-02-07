import React from "react";
import { useState } from "react";
import "../assets/styles/technology.css";
import { destinations } from "../assets/data/data.js";
import Image from "../components/image";

export const Technology = () => {
  const [tech] = useState(destinations.technology);
  const [value, setValue] = useState(0);

  const { name, images, description, id } = tech[value];

  return (
    <section className="technology-main">
      <h1 className="tech-h1">
        <span className="num-d">03</span>
        <span className="h1-text">Space launch 101</span>
      </h1>
      <div className="tech-content">
        <div className="tech-list">
          {tech.map((technology, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`t-but ${index === value && "t-but-active"}`}
              >
                {technology.id}
              </button>
            );
          })}
        </div>
        <div className="techin">
          <h4 className="techin-h4">The terminology...</h4>
          <h2 className="techin-h2">{name}</h2>
          <p className="techin-p">{description}</p>
        </div>
        <div>
          <Image
            src={images.portrait}
            alt={name}
            title={name}
            className="img-potrait"
          />
          <Image
            src={images.landscape}
            alt={name}
            title={name}
            className="img-landscape"
          />
        </div>
      </div>
    </section>
  );
};
