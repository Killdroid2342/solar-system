import React, { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

export function Mercury() {
  const texture = useTexture('src/assets/img/mercury.jpg');
  const systemRef = useRef<Mesh>(null!);
  const orbitRadius = 20;
  const orbitSpeed = 0.01;
  const angle = useRef(0);

  useFrame(() => {
    angle.current += orbitSpeed;
    const x = Math.cos(angle.current) * orbitRadius;
    const z = Math.sin(angle.current) * orbitRadius;
    systemRef.current.position.set(x, 0, z);
    systemRef.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={systemRef}>
      <sphereGeometry args={[0.5, 128, 64]} />
      <meshStandardMaterial map={texture} />

      {/* <axesHelper /> */}
    </mesh>
  );
}
