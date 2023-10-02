import React from 'react';

const Modal = ({ closeModal, selectedPlanet, data }: any) => {
  console.log(data);
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
      <div className='bg-transparent p-4 rounded-lg overflow-auto max-h-96 text-white border border-white'>
        <button
          className='mt-2 px-4 py-2 border border-white text-white rounded-lg'
          onClick={closeModal}
        >
          X
        </button>
        <h2 className='text-2xl font-semibold mb-4'>{`Information About ${selectedPlanet}`}</h2>
        {data?.map((planet: any) => {
          if (planet.name === selectedPlanet) {
            return (
              <div key={planet.planetOrder}>
                <p className='text-white text-center text-2xl'>{planet.name}</p>
                <p className='text-white text-center'>{planet.description}</p>
                <p className='text-white text-center'>
                  {` Mass of ${planet.name} ${' '} ${planet.basicDetails.mass}`}
                </p>

                <p className='text-white text-center'>
                  {` Volume of ${planet.name} ${' '} ${
                    planet.basicDetails.volume
                  }`}
                </p>
                <p className='text-white text-center'>{`Order of ${
                  planet.name
                }${' '}${planet.planetOrder}`}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Modal;
