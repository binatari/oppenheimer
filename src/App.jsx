import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Model } from "./Model/Scene";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Hero from "./Section/Hero";
import VideoBg from "./Section/VideoBg";
import Overlay from "./Section/Overlay";
import Loader from "./Loader";
// import { getProject } from '@theatre/core'
// const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

const Scene = () => {
  const boxRef = useRef();
  // useFrame((state, delta) => {
  //   boxRef.current.rotation.y += 0.02;
  // });

  return (
    <>
      <Model />
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <ReactLenis root>
      <Overlay />
      <Hero />
      <VideoBg />
      <Canvas camera={{ position: [0, 5, 20], fov: 55, near: 1, far: 20000 }} id='town' className="min-h-screen w-full">
        <ScrollControls pages={3} damping={0.01}>
          <Suspense fallback={<Loader />}>
            <Scene />
          </Suspense>
        </ScrollControls>
      </Canvas>
      {/* <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
      <OrbitControls />
      <Scene />
    </Canvas> */}
    </ReactLenis>
  );
};

export default App;
