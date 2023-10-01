import React from 'react';

const Modal = () => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
        <div className='bg-transparent p-4 rounded-lg overflow-auto max-h-96 text-white border border-white'>
          <button className='mt-2 px-4 py-2 border border-white text-white rounded-lg'>
            X
          </button>
          <h2 className='text-2xl font-semibold mb-4'>{`Information About NAME OF ${'PLANET GOES HERE'}`}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            mollitia ad numquam! Ut esse non, reiciendis iure consectetur fugiat
            inventore aut ipsam, vel repellat suscipit corporis ipsum
            exercitationem tempora sunt. FACTS HERE
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
