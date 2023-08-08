import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box, OrbitControls, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { EffectComposer, DepthOfField, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { Model } from "./Model/Scene";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Hero from "./Section/Hero";
import VideoBg from "./Section/VideoBg";
import Overlay from "./Section/Overlay";
import Loader from "./Loader";
import { getProject, val } from "@theatre/core";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";

import flyThroughState from "./fly.json";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 5, mouse.y * 0.1, camera.position.z), 0.02));
}

const App = () => {
  const sheet = getProject("Fly Through 4", { state: flyThroughState }).sheet("Scene");
  const lenisRef = useRef();
  return (
    <>
      <ReactLenis root>
        <Overlay />
        <Hero />
        <VideoBg />
      </ReactLenis>

      <Canvas gl={{ preserveDrawingBuffer: true }} id='town' className=' h-[100vh!important] w-full fixed inset-0'>
        <ScrollControls pages={7} damping={0.01} className='ggg'>
          <SheetProvider sheet={sheet} className='ggg'>
            <Scene />
            <EffectComposer>
              <Noise opacity={0.05} />
            </EffectComposer>
            {/* <Rig /> */}
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </>
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

  const bgColor = "grey";

  return (
    <>
      {/* <color attach="background" args={[bgColor]} /> */}
      {/* <fog attach="fog" color="#FFBF00" near={1} far={40} /> */}
      <ambientLight intensity={0.3} />
      {/* <directionalLight position={[-5, 5, -5]} intensity={1.5} /> */}
      <Model />
      <PerspectiveCamera theatreKey='Camera' makeDefault position={[0, 0, 10]} fov={90} near={0.1} far={70} />
    </>
  );
}

export default App;
