import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
export function Saturn() {
  const systemRef = useRef<Mesh>(null!);
  const texture = useTexture('src/assets/img/saturn.jpg');
  const orbitRadius = 120;
  const orbitSpeed = 0.0005;
  const angle = useRef(0);
  useFrame(() => {
    angle.current += orbitSpeed;
    const x = Math.cos(angle.current) * orbitRadius;
    const z = Math.sin(angle.current) * orbitRadius;
    systemRef.current.position.set(x, 0, z);
    systemRef.current.rotation.y += 0.006;
  });
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
