const Plane = ({ position, onClick, rotation }) => {
    return (
     <mesh >
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial
       attach="material"
       color="green"
       opacity={0.5}
       transparent
      />
     </mesh>
    );
   }