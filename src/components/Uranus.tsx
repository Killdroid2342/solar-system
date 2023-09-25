import React from 'react';
import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
export function Uranus() {
  const systemRef = useRef<Mesh>(null!);
  const texture = useTexture('src/assets/img/uranus.jpg');
  useFrame(() => {});
  return (
    <>
      <mesh ref={systemRef} position={[140, 0, 0]}>
        <sphereGeometry args={[2, 128, 64]} />
        <meshStandardMaterial map={texture} />
        <OrbitControls />
      </mesh>
    </>
  );
}
