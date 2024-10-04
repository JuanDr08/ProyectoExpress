import React, { useState, useEffect } from 'react';
import { Muesca } from '../components/Muesca';
import { useLoaderData, useNavigate } from 'react-router-dom';

function InfoCraft() {

  const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const data = useLoaderData()


    useEffect(()=> {

        if (!data) navigate('/register')
        setUser([data.user])

    },[])

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full ">
      {/* Muesca en la esquina superior izquierda */}
      <div className="absolute top-0 left-0">
        <Muesca />
      </div>

      <div className="relative flex flex-col items-center justify-center w-full mb-20 mt-[5em] h-[5em]">
        <img src="/img/rhombusesTitle.png" className="w-[20em] h-auto" alt="Rhombuses" />
      </div>

      <div className='text-left mb-2'>
        <h3 style={{ color: '#9D1A1A' }} className='text-[1em]'>Taller de arte Awaq Ayllus - Documental</h3>
      </div>

      <div className="flex items-center justify-center bg-[#703A31] px-4 relative  w-full h-[16em]">
        <img src="/img/VideoPhoto.png" className="w-full h-auto" alt="Video Preview" />
        <img src="/img/ButtonPlay.png" className="absolute w-[5em] h-auto" alt="Play Button" />
      </div>

      {/* Información interactiva */}
      <div className="flex flex-col items-center text-left space-y-4 mx-6 mt-[2em]">
        <p style={{ color: '#9D1A1A' }} className="text-lg font-semibold text-left">Conoce más del taller de forma interactiva</p>
        <p className="text-base">Escanea el código QR con tu celular y disfruta de la experiencia</p>
        <img src="/img/QRPhoto.png" className="w-[12em] h-auto mt-10" alt="QR Code" />
      </div>
    </div>
  );
}

export default InfoCraft;

