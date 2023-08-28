import React from "react";
import Wave from "react-wavify";

const Wavify = () => (
  <Wave
    fill="#573232"
    paused={false}
    options={{
      height: 5,
      amplitude: 20,
      speed: 0.18,
      points: 3,
    }}
  />
);

export default Wavify;
