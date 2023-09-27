import { Canvas } from '@react-three/fiber';
import { Sun } from './components/Sun';
import { Stars } from '@react-three/drei';
import { Mercury } from './components/Mercury';
import { Venus } from './components/Venus';
import { Earth } from './components/Earth';
import { Mars } from './components/Mars';
import { Jupiter } from './components/Jupiter';
import { Saturn } from './components/Saturn';
import { Uranus } from './components/Uranus';
import { Neptune } from './components/Neptune';
const App = () => {
  return (
    <div className='h-screen'>
      <Canvas>
        <color attach='background' args={['black']} />
        <ambientLight intensity={1} />
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
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
