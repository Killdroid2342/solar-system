import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
export function Mars() {
  const systemRef = useRef<Mesh>(null!);
  const texture = useTexture('src/assets/img/mars.jpg');
  const orbitRadius = 80;
  const orbitSpeed = 0.001;
  const angle = useRef(0);
  useFrame(() => {
    angle.current += orbitSpeed;
    const x = Math.cos(angle.current) * orbitRadius;
    const z = Math.sin(angle.current) * orbitRadius;
    systemRef.current.position.set(x, 0, z);
    systemRef.current.rotation.y += 0.01;
  });
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
