import { useRef } from 'react';
import { Mesh, PointLight, PointLightHelper } from 'three';
import { OrbitControls, useHelper, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export function Sun() {
  const texture = useTexture('src/assets/img/sun.jpg');
  const systemRef = useRef<Mesh>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  // useHelper(pointLightRef, PointLightHelper, 180, 'green');
  return (
    <>
      <mesh ref={systemRef}>
        <sphereGeometry args={[5, 128, 64]} />
        <meshStandardMaterial map={texture} />
        <pointLight ref={pointLightRef} intensity={20000} />
        <OrbitControls />
        {/* <EffectComposer multisampling={8}>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0}
            luminanceSmoothing={0.4}
            intensity={0.6}
          />
        </EffectComposer> */}
        <Sun />
      </mesh>
    </>
  );
}