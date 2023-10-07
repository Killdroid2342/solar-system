import { useRef } from 'react';
import { DoubleSide, Mesh } from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Jupiter({ OpenModal, name }: any) {
  const systemRef = useRef<Mesh>(null!);
  const ringRef = useRef<Mesh>(null!);
  const texture = useTexture('/assets/img/jupiter.jpg');
  const orbitRadius = 140;
  const orbitSpeed = 0.0009;
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
        <torusGeometry args={[orbitRadius, 0.02, 64, 128]} />
        <meshBasicMaterial
          color='white'
          side={DoubleSide}
          opacity={0.2}
          transparent
          depthTest={true}
        />
      </mesh>
      <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <mesh ref={systemRef} position={[140, 0, 0]}>
          <sphereGeometry args={[3, 128, 64]} />
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
