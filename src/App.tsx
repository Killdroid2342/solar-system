import { Canvas } from '@react-three/fiber';
import Sun from './components/Sun';

const App = () => {
  return (
    <div className='h-screen'>
      <Canvas>
        <color attach='background' args={['#202025']} />
        <ambientLight />
        <Sun />
        <axesHelper args={[3]} />
      </Canvas>
    </div>
  );
};

export default App;
