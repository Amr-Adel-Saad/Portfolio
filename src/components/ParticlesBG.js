import React from 'react';
import Particles from 'react-particles-js';

export default function ParticlesBG() {
  return (
    <div>
      <Particles
        params={{
          background: {
            color: {
              value: "#0A1B2A"
            }
          },
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.02
            },
            "move": {
              "direction": "none",
              "speed": 0.1
            },
            "size": {
              "value": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
              }
            }
          },
          "retina_detect": true
        }} />
    </div>
  )
}
