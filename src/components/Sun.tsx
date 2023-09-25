import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useTexture } from '@react-three/drei';

export function Sun() {
  const texture = useTexture('src/assets/img/sun.jpg');
  const systemRef = useRef<Mesh>(null!);

  return (
    <>
      <mesh ref={systemRef}>
        <sphereGeometry args={[5, 128, 64]} />
        <meshStandardMaterial map={texture} />
        <OrbitControls />
      </mesh>
    </>
  );
}
