import React from 'react';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Stars from './ui/Stars';

function Hero() {
  return (
    <section id="/" className="relative w-full mx-auto min-h-screen">
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto -z-10 bg-bg-main">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
      <div className="max-w-7xl min-h-screen p-5 pt-20 z-20 mx-auto flex flex-wrap content-evenly md:align-middle items-center justify-center md:justify-around">
        <h1 className="sr-only">
          Front end developer portfolio - Viorel Lazari
        </h1>
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#9ea7b0"
                attach="material"
                distort={0.3}
                speed={1.5}
              />
            </Sphere>
          </Canvas>
          <img
            className="absolute bg-transparent top-0 bottom-0 left-0 right-0 m-auto w-60 h-60 md:w-72 md:h-72 object-contain rounded-full"
            src="./../../public/Viorel.png"
            alt=""
          />
        </div>
        <div className="md:w-96 bg-bg-main">
          <p className="text-main-gray text-xl p-5">
            &quot;
            <span className="text-main-light text-2xl font-semibold">
              Welcome to my portfolio!
            </span>
            <br />
            <br />
            This is where you can explore my projects, skills, and passion for
            creating engaging web experiences. Take a look around and get a
            glimpse of my capabilities as a front-end developer.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
