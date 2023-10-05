const Modal = ({ closeModal, selectedPlanet, data, sunData }: any) => {
  const planetData = data.find((planet: any) => planet.name === selectedPlanet);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
      <div className='bg-transparent p-4 rounded-lg overflow-auto max-h-96 text-white border border-white'>
        <button
          className='mt-2 px-4 py-2 border border-white text-white rounded-lg'
          onClick={closeModal}
        >
          X
        </button>

        {planetData ? (
          <div>
            <h2 className='text-2xl font-semibold mb-4'>{`Information About ${selectedPlanet}`}</h2>
            <p className='text-white text-center text-2xl'>{planetData.name}</p>
            <p className='text-white text-center'>{planetData.description}</p>
            <p className='text-white text-center'>
              {`Mass of ${planetData.name} ${' '} ${
                planetData.basicDetails.mass
              }`}
            </p>
            <p className='text-white text-center'>
              {`Volume of ${planetData.name} ${' '} ${
                planetData.basicDetails.volume
              }`}
            </p>
            <p className='text-white text-center'>{`Order of ${
              planetData.name
            }${' '}${planetData.planetOrder}`}</p>
          </div>
        ) : (
          <div>
            <h2 className='text-2xl font-semibold mb-4'>{`Information About ${sunData.name}`}</h2>
            <p className='text-white text-center text-2xl'>{sunData.name}</p>
            <p className='text-white text-center'>{sunData.description}</p>
            <p className='text-white text-center'>
              {`Mass of ${sunData.name} ${' '} ${sunData.mass}`}
            </p>
            <p className='text-white text-center'>
              {`Volume of ${sunData.name} ${' '} ${sunData.volume}`}
            </p>
            <p className='text-white text-center'>{`Order of ${
              sunData.name
            }${' '}${sunData.planetOrder}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
