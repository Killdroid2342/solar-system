import { Canvas } from '@react-three/fiber';
import { Sun } from './components/planets/Sun';
import { PerspectiveCamera, Stars } from '@react-three/drei';
import { Mercury } from './components/planets/Mercury';
import { Venus } from './components/planets/Venus';
import { Earth } from './components/planets/Earth';
import { Mars } from './components/planets/Mars';
import { Jupiter } from './components/planets/Jupiter';
import { Saturn } from './components/planets/Saturn';
import { Uranus } from './components/planets/Uranus';
import { Neptune } from './components/planets/Neptune';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from './components/planets/PlanetModal/Modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  function getData() {
    axios.get('https://api.le-systeme-solaire.net/rest/bodies/').then((res) => {
      console.log(res);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='h-screen'>
      <Canvas>
        <PerspectiveCamera makeDefault fov={50} position={[90, 120, 90]} />
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
      {/* <Modal /> */}
    </div>
  );
};

export default App;
