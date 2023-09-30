import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
export function Earth() {
  const systemRef = useRef<Mesh>(null!);
  const texture = useTexture('src/assets/img/earth.jpg');
  const orbitRadius = 60;
  const orbitSpeed = 0.003;
  const angle = useRef(0);
  useFrame(() => {
    angle.current += orbitSpeed;
    const x = Math.cos(angle.current) * orbitRadius;
    const z = Math.sin(angle.current) * orbitRadius;
    systemRef.current.position.set(x, 0, z);
    systemRef.current.rotation.y += 0.015;
  });
  return (
    <>
      <group>
        <mesh rotation-x={Math.PI / 2}>
          <torusGeometry args={[orbitRadius, 0.02]} />
          <meshBasicMaterial color='white' />
        </mesh>
        <mesh ref={systemRef} position={[60, 0, 0]}>
          <sphereGeometry args={[0.9, 128, 64]} />
          <meshStandardMaterial map={texture} />
          <OrbitControls />
        </mesh>
      </group>
    </>
  );
}
