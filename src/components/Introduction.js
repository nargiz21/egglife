import React, { useEffect, useState } from "react";
import { colors, headers } from "../data";
import EggBtn from "./EggBtn";
import blue from "../images/blue.webp"; 
import orange from "../images/orange.webp"; 
import green from "../images/green.webp"; 
import red from "../images/red.webp"; 
import yellow from "../images/yellow.webp"; 


const Introduction = () => {
   const images = [orange, red, green, yellow, blue];
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 4 ? 0 : v + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="introduction-wrapper"
      style={{ backgroundColor: colors[value] }}
    >
      <h1 className="static-header">The Perfect Wrap</h1>
      <h2 className="dynamic-header">For {headers[value]}</h2>
      <div className="link-section">
        <p>Wraps made with egg whites, not flour.</p>
        <EggBtn/>
      </div>
      <div className="journal-img-wrapper">
        <img src={images[value]}/>
      </div>
    </div>
  );
};

export default Introduction;
