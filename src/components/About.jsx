import React from 'react';
import { Canvas } from '@react-three/fiber';
import Stars from './ui/Stars';
import { technologies } from '../constanta';

function About() {
  return (
    <section id="about" className="relative w-full min-h-screen">
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto -z-10 bg-bg-main">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
      <div className="max-w-7xl h-full p-5 pt-20 snap-center z-20 mx-auto">
        <h3 className="text-center text-main-light text-xl lg:text-3xl p-2 m-4 lg:m-20 bg-bg-main">
          About Me - Front-end Developer
        </h3>
        <div className="text-base lg:text-lg text-justify p-2 indent-3 bg-bg-main">
          <p className="leading-loose">
            &quot;Hello there! My name is Viorel, and I&apos;m a passionate
            front-end developer. My journey into the world of front-end
            development began with a strong curiosity and an eagerness to bring
            ideas to life. Over the course of my studies, I&apos;ve gained
            expertise in HTML, CSS, JavaScript and React.
          </p>
          <p className="leading-loose">
            I&apos;m excited about the opportunity to contribute my skills and
            grow as a front-end developer in a collaborative and dynamic
            environment. If you&apos;re interested in working together or have
            any questions, feel free to reach out. I look forward to connecting
            with you!&quot;
          </p>
        </div>
        <div>
          <h3 className="text-center text-main-light text-xl lg:text-3xl p-2 m-4 lg:m-20 bg-bg-main">
            Skills
          </h3>
          {technologies.map((tec) => (
            <p key={tec.name} className="w-fit p-1 bg-bg-main mx-auto">
              {tec.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
