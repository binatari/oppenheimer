import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Model } from "./Model/Scene";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Hero from "./Section/Hero";
import VideoBg from "./Section/VideoBg";
import Overlay from "./Section/Overlay";
import Loader from "./Loader";
import { getProject, val } from "@theatre/core";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";

import flyThroughState from './fly.json'

const App = () => {
  const sheet = getProject("Fly Through 4", {state:flyThroughState}).sheet("Scene");

  return (
    <ReactLenis root>
      <Overlay />
      <Hero />
      <VideoBg />
      <Canvas gl={{ preserveDrawingBuffer: true }} id='town' className='min-h-screen h-[100vh!important] w-full cursor-pointer z-[9999]'>
        <ScrollControls pages={7} damping={0.01} >
          <SheetProvider sheet={sheet}>
            <Scroll>
            <Scene />
            </Scroll>
           
          </SheetProvider>
        </ScrollControls>
      </Canvas>
      {/* <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
      <OrbitControls />
      <Scene />
    </Canvas> */}
    </ReactLenis>
  );
};

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  const bgColor = "black";

  return (
    <>
      {/* <color attach="background" args={[bgColor]} /> */}
      {/* <fog attach="fog" color={bgColor} near={-4} far={10} /> */}
      <ambientLight intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={1.5} />
      <Model />
      <PerspectiveCamera theatreKey='Camera' makeDefault position={[0, 0, 10]} fov={90} near={0.1} far={70} />
    </>
  );
}

export default App;
