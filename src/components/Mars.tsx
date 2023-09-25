import React from 'react';
import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
export function Mars() {
  const systemRef = useRef<Mesh>(null!);
  const texture = useTexture('src/assets/img/mars.jpg');
  useFrame(() => {});
  return (
    <>
      <mesh ref={systemRef} position={[80, 0, 0]}>
        <sphereGeometry args={[0.9, 128, 64]} />
        <meshStandardMaterial map={texture} />
        <OrbitControls />
      </mesh>
    </>
  );
}
