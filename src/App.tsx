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
import { useState } from 'react';
import Modal from './components/planets/PlanetModal/Modal';
const sunData = {
  name: 'Sun',
  description:
    'The Sun is a 4.5 billion-year-old yellow dwarf star – a hot glowing ball of hydrogen and helium – at the center of our solar system. It’s about 93 million miles (150 million kilometers) from Earth and it’s our solar system’s only star. Without the Sun’s energy, life as we know it could not exist on our home planet.',
  mass: '1.989 × 10^30 kg',
  volume: '1,412,000,000,000 km^3',
  planetOrder: '0',
  id: 0,
};

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const [selectedPlanet, setSelectedPlanet] = useState('');

  const OpenModal = (name: string) => {
    setSelectedPlanet(name);
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
    setData({
      name: '',
      description: '',
      mass: '',
      volume: '',
      planetOrder: '',
      id: 0,
    });
    setSelectedPlanet('');
  };
  async function getData(id: any) {
    const options = {
      method: 'GET',
      url: `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${id}`,
      headers: {
        'X-RapidAPI-Key': '666a0b4740msh10e928643b87294p167356jsn43c95ed0f3b6',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='h-screen cursor-grab active:cursor-grabbing'>
      <Canvas>
        <PerspectiveCamera makeDefault fov={50} position={[90, 120, 90]} />
        <color attach='background' args={['black']} />
        <Sun OpenModal={OpenModal} sunData={sunData} setData={setData} />
        <ambientLight intensity={0.1} />
        <Mercury
          OpenModal={OpenModal}
          name='Mercury'
          getData={getData}
          id={1}
        />
        <Venus OpenModal={OpenModal} name='Venus' getData={getData} id={2} />
        <Earth OpenModal={OpenModal} name='Earth' getData={getData} id={3} />
        <Mars OpenModal={OpenModal} name='Mars' getData={getData} id={4} />
        <Jupiter
          OpenModal={OpenModal}
          name='Jupiter'
          getData={getData}
          id={5}
        />
        <Saturn OpenModal={OpenModal} name='Saturn' getData={getData} id={6} />
        <Uranus OpenModal={OpenModal} name='Uranus' getData={getData} id={7} />
        <Neptune
          OpenModal={OpenModal}
          name='Neptune'
          getData={getData}
          id={8}
        />
        <Stars
          radius={400}
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
          sunData={sunData}
        />
      )}
    </div>
  );
};

export default App;
