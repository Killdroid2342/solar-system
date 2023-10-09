const Modal = ({ closeModal, selectedPlanet, data, sunData }: any) => {
  let volume = data.basicDetails?.volume || sunData.volume;
  let mass = data.basicDetails?.mass || sunData.mass;
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
      <div className='bg-transparent p-4 rounded-lg overflow-auto max-h-96 text-white border border-white'>
        <button
          className='mt-2 px-4 py-2 border border-white text-white rounded-lg'
          onClick={() => {
            closeModal();
          }}
        >
          X
        </button>
        <div>
          <h2 className='text-3xl font-semibold mb-4 text-center'>{`Information About ${
            selectedPlanet || sunData.name
          }`}</h2>
          <p className='text-white'>
            {data.description || sunData.description}
          </p>
          <p className='text-white mt-5'>
            {`Mass of ${data.name}${': '} ${mass}`}
          </p>
          <p className='text-white mt-5'>
            {`Volume of ${data.name || sunData.name}${': '} ${volume}`}
          </p>
          <p className='text-white  mt-5'>{`Order of ${
            data.name || sunData.name
          }${': '}${data.planetOrder || sunData.planetOrder}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
