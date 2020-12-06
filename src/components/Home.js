import React from 'react';

import ParticlesBG from './ParticlesBG';

export default function Home() {
  return (
    <section id="home">
      <ParticlesBG />
      <div>
        <h1>Hello, I'm <span>Amr</span>.<br />I'm a web developer.</h1>
        <a href="#projects">View my work <i className="fas fa-arrow-down"></i></a>
      </div>
    </section>
  );
}
