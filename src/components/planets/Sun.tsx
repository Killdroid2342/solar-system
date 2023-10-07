import { useRef } from 'react';
import { Mesh, PointLight } from 'three';
import { OrbitControls, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize, Resolution } from 'postprocessing';

export function Sun({ OpenModal }: any) {
  const texture = useTexture('/assets/img/sun.jpg');
  const sphereRef = useRef<Mesh>(null!);
  const pointLightRef = useRef<PointLight>(null!);

  return (
    <>
      <group>
        <mesh ref={sphereRef} onClick={OpenModal}>
          <sphereGeometry args={[5, 128, 64]} />
          <meshPhysicalMaterial
            roughness={0.2}
            metalness={0.5}
            emissiveMap={texture}
            emissive={'white'}
            emissiveIntensity={2}
          />
        </mesh>
        <pointLight ref={pointLightRef} intensity={9000} color='white' />
        <OrbitControls />
        <EffectComposer>
          <Bloom
            intensity={1.5}
            kernelSize={KernelSize.LARGE}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.1}
            mipmapBlur={true}
            resolutionX={Resolution.AUTO_SIZE}
            resolutionY={Resolution.AUTO_SIZE}
            blendFunction={undefined}
          />
        </EffectComposer>
      </group>
    </>
  );
}
