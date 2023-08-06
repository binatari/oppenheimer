/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf --transform 
Files: scene.gltf [1.68MB] > scene-transformed.glb [2.27MB] (-35%)
Author: Comicaroid (https://sketchfab.com/yuuuusukeeee)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/street-town-f6ffeb1103814fd08f093c21575776e5
Title: Street_[town]
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      
      <mesh geometry={nodes.Object_6.geometry} material={materials.PaletteMaterial001} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
