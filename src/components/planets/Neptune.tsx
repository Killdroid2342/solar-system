import { useRef } from 'react';
import { DoubleSide, Mesh } from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Rings from './planetRings/Rings';

export function Neptune({ OpenModal, name, getData, id }: any) {
  const systemRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);
  const texture = useTexture('/assets/img/neptune.jpg');
  const orbitRadius = 200;
  const orbitSpeed = 0.0003;
  const angle = useRef(0);

  useFrame(() => {
    angle.current += orbitSpeed;
    const x = Math.cos(angle.current) * orbitRadius;

    const z = Math.sin(angle.current) * orbitRadius;
    systemRef.current.position.set(x, 0, z);
    systemRef.current.rotation.y += 0.002;
    ringRef.current.position.set(x, 0, z);
  });

  const planetClick = () => {
    OpenModal(name);
    getData(id);
  };
  return (
    <group onClick={planetClick}>
      <Rings orbitRadius={orbitRadius} />
      <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
        <meshBasicMaterial color='green' />
        <mesh ref={systemRef} position={[160, 0, 0]}>
          <sphereGeometry args={[2.5, 128, 64]} />
          <meshStandardMaterial map={texture} />
        </mesh>

        <mesh ref={ringRef} rotation={[Math.PI / 1.6, 0, 0]}>
          <ringGeometry args={[2.5 + 2, 1.4 + 2, 32]} />
          <meshBasicMaterial
            color='#869DA6'
            side={DoubleSide}
            opacity={0.2}
            transparent
            depthTest={true}
          />
        </mesh>
      </mesh>
    </group>
  );
}
