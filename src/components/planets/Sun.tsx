import { useRef } from 'react';
import { Mesh, PointLight } from 'three';
import { OrbitControls, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize, Resolution } from 'postprocessing';

export function Sun({ OpenModal }: any) {
  const texture = useTexture('src/assets/img/sun.jpg');
  const systemRef = useRef<Mesh>(null!);
  const pointLightRef = useRef<PointLight>(null!);

  return (
    <>
      <mesh ref={systemRef} onClick={OpenModal}>
        <sphereGeometry args={[5, 128, 64]} />
        <meshPhysicalMaterial
          roughness={0.2}
          metalness={0.5}
          emissiveMap={texture}
          emissive={'white'}
          emissiveIntensity={2}
        />
        <pointLight ref={pointLightRef} intensity={9000} />
        <OrbitControls />
        <EffectComposer>
          <Bloom />
        </EffectComposer>
      </mesh>
    </>
  );
}
