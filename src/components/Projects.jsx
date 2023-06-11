import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Stars from './ui/Stars';
import { projects } from '../constanta';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full min-h-screen text-main-gray"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto -z-10 bg-bg-main">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
      <div className="max-w-7xl p-5 pt-20 snap-center z-20 mx-auto">
        <h3 className="text-center text-main-light text-xl lg:text-3xl p-1 m-4 lg:m-20 bg-bg-main">
          My projects
        </h3>
        {projects.map((project, index) => (
          <div key={project.name}>
            <div className="flex flex-col sm:flex-row my-5 py-4 overflow-hidden bg-bg-main shadow-xl shadow-bg-main">
              <motion.div
                className="max-h-[300px] max-w-[300px] overflow-hidden mx-auto sm:mr-10"
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                variants={{
                  hidden: {
                    x: -200,
                  },
                  show: {
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.5 + index / 2,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                }}
              >
                <a
                  href={`${project.deployURL}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="hover:scale-110 transition duration-500 cursor-pointer ease-out object-cover"
                    src={`${project.imageURL}`}
                    alt={`${project.name}`}
                  />
                </a>
              </motion.div>
              <motion.div
                className="p-4"
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                variants={{
                  hidden: {
                    x: 200,
                  },
                  show: {
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.5 + index / 2,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                }}
              >
                <h4 className="text-center sm:text-left text-main-light text-lg p-2">
                  {project.name}
                </h4>
                <p className="text-justify indent-3">{project.description}</p>
                <p className="text-main-light py-1 sm:py-3 indent-3">
                  Build using:&#32;
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}&#32;</span>
                  ))}
                </p>
                <div className="py-3 text-main-light">
                  <a
                    className="cursor-pointer underline underline-offset-2"
                    href={`${project.deployURL}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Netlify
                  </a>
                </div>
                <div className="text-main-light">
                  <a
                    className="cursor-pointer underline underline-offset-2"
                    href={`${project.gitHubURL}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github repository
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
