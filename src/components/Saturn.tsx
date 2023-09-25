import React from 'react';
import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
export function Saturn() {
  const systemRef = useRef<Mesh>(null!);
  const texture = useTexture('src/assets/img/saturn.jpg');
  useFrame(() => {});
  return (
    <>
      <mesh ref={systemRef} position={[120, 0, 0]}>
        <sphereGeometry args={[2.5, 128, 64]} />
        <meshStandardMaterial map={texture} />
        <OrbitControls />
      </mesh>
    </>
  );
}
