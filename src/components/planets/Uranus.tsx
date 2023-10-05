import { useRef } from 'react';
import { DoubleSide, Mesh } from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Uranus({ OpenModal, name }: any) {
  const systemRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);
  const texture = useTexture('src/assets/img/uranus.jpg');
  const orbitRadius = 140;
  const orbitSpeed = 0.0004;
  const angle = useRef(0);

  useFrame(() => {
    angle.current += orbitSpeed;
    const x = Math.cos(angle.current) * orbitRadius;

    const z = Math.sin(angle.current) * orbitRadius;
    systemRef.current.position.set(x, 0, z);
    ringRef.current.position.set(x, 0, z);
    systemRef.current.rotation.y += 0.006;
  });

  const planetClick = () => {
    OpenModal(name);
  };
  return (
    <group onClick={planetClick}>
      <mesh rotation-x={Math.PI / 2}>
        <torusGeometry args={[orbitRadius, 0.02]} />
        <meshBasicMaterial color='white' />
      </mesh>
      <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
        <meshBasicMaterial color='green' />
        <mesh ref={systemRef} position={[140, 0, 0]}>
          <sphereGeometry args={[2.5, 128, 64]} />
          <meshStandardMaterial map={texture} />
        </mesh>

        <mesh ref={ringRef} rotation={[Math.PI / 1.1, 0, 0]}>
          <ringGeometry args={[2.5 + 2, 1.4 + 2, 32]} />
          <meshBasicMaterial
            color='grey'
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
