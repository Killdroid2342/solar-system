import { DoubleSide } from 'three';

const Rings = ({ orbitRadius }: any) => {
  return (
    <mesh rotation-x={Math.PI / 2}>
      <torusGeometry args={[orbitRadius, 0.02, 64, 128]} />
      <meshBasicMaterial
        color='white'
        side={DoubleSide}
        opacity={0.2}
        transparent
        depthTest={true}
      />
    </mesh>
  );
};

export default Rings;
