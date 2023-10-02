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
  const [data, setData] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState('');

  const OpenModal = (name: string) => {
    setSelectedPlanet(name);
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  async function getData() {
    const options = {
      method: 'GET',
      url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/',
      headers: {
        'X-RapidAPI-Key': '666a0b4740msh10e928643b87294p167356jsn43c95ed0f3b6',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='h-screen'>
      <Canvas>
        <PerspectiveCamera makeDefault fov={50} position={[90, 120, 90]} />
        <color attach='background' args={['black']} />
        <Sun OpenModal={OpenModal} />
        <ambientLight intensity={0.1} />
        <Mercury OpenModal={OpenModal} name='Mercury' />
        <Venus OpenModal={OpenModal} name='Venus' />
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
      {openModal && (
        <Modal
          closeModal={closeModal}
          data={data}
          setData={setData}
          selectedPlanet={selectedPlanet}
        />
      )}
    </div>
  );
};

export default App;
