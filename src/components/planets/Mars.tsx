import { useRef } from 'react';
import { DoubleSide, Mesh } from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Rings from './planetRings/Rings';

export function Mars({ OpenModal, name, getData, id }: any) {
  const systemRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);
  const texture = useTexture('/assets/img/mars.jpg');

  const orbitRadius = 120;
  const orbitSpeed = 0.001;
  const angle = useRef(0);

  useFrame(() => {
    angle.current += orbitSpeed;
    const x = Math.cos(angle.current) * orbitRadius;

    const z = Math.sin(angle.current) * orbitRadius;
    systemRef.current.position.set(x, 0, z);
    ringRef.current.position.set(x, 0, z);
    systemRef.current.rotation.y += 0.01;
  });

  const planetClick = () => {
    OpenModal(name);
    getData(id);
  };
  return (
    <group onClick={planetClick}>
      <Rings orbitRadius={orbitRadius} />
      <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <mesh ref={systemRef} position={[120, 0, 0]}>
          <sphereGeometry args={[0.9, 128, 64]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0.2, 0]}>
          <ringGeometry args={[3 + 5, 0 + 0, 32]} />
          <meshBasicMaterial
            side={DoubleSide}
            opacity={0}
            transparent
            depthTest={false}
          />
        </mesh>
      </mesh>
    </group>
  );
}
