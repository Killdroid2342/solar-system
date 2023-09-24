import { Canvas } from '@react-three/fiber';
import { Sun } from './components/Sun';

const App = () => {
  return (
    <div className='h-screen'>
      <Canvas>
        <color attach='background' args={['black']} />
        <ambientLight />
        <Sun />
      </Canvas>
    </div>
  );
};

export default App;
