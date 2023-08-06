import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { Model } from "./Model/Scene";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Hero from "./Section/Hero";
import VideoBg from "./Section/VideoBg";
import Overlay from "./Section/Overlay";

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
    <Overlay/>
    <Hero/>
    <VideoBg/>
    {/* <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
      <OrbitControls />
      <Scene />
    </Canvas> */}
    </ReactLenis>
  );
};

export default App;
