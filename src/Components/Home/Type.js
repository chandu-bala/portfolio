import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Web Developer", "Cloud Computing Engineer", "Quick Learner", "NodeJS Engineer", "Iot Architect"],
        autoStart: true,
        loop: true,
        deleteSpeed: 100
      }}
    />
  );
}

export default Type;
