import { Canvas } from '@react-three/fiber';
import { Sun } from './components/planets/Sun';
import { Stars } from '@react-three/drei';
import { Mercury } from './components/planets/Mercury';
import { Venus } from './components/planets/Venus';
import { Earth } from './components/planets/Earth';
import { Mars } from './components/planets/Mars';
import { Jupiter } from './components/planets/Jupiter';
import { Saturn } from './components/planets/Saturn';
import { Uranus } from './components/planets/Uranus';
import { Neptune } from './components/planets/Neptune';
const App = () => {
  return (
    <div className='h-screen'>
      <Canvas>
        <color attach='background' args={['black']} />
        <Sun />
        <ambientLight intensity={0.1} />
        <Mercury />
        <Venus />
        <Earth />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
        <Mars />
        <Stars
          radius={150}
          count={7000}
          factor={2}
          saturation={100}
          fade
          speed={3}
        />
      </Canvas>
    </div>
  );
};

export default App;
