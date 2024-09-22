import React from 'react';
import { Muesca } from '../components/Muesca';

function InfoCraft() {
  return (
    <div className="relative flex flex-col items-center w-full h-full space-y-8 p-8">
      {/* Muesca en la esquina superior izquierda */}
      <div className="absolute top-0 left-0">
        <Muesca />
      </div>

      {/* Sección superior con rhombuses y texto */}
      <div className="flex flex-col items-center w-full mb-20 space-y-4">
        <img src="/img/rhombuses.png" className="w-60 h-auto" alt="Rhombuses" />
        <img src="/img/TextInfoCraft.png" className="w-80 h-auto" alt="Text Info" />
        <img src="/img/rhombuses.png" className="w-60 h-auto" alt="Rhombuses" />
    </div>


      {/* Sección de video (centrada con flex) */}
      <div className="flex items-center justify-center bg-[#703A31] p-4 rounded-lg relative mt-10 w-full">
        <img src="img/VideoPhoto.png" className="w-60 h-auto" alt="Video Preview" />
        <img src="img/ButtonPlay.png" className="absolute w-10 h-auto" alt="Play Button" />
      </div>

      {/* Información interactiva */}
      <div className="flex flex-col items-center text-center space-y-4">
        <p className="text-lg font-semibold">Conoce más del taller de forma interactiva</p>
        <p className="text-base">Escanea el código QR con tu celular y disfruta de la experiencia</p>
        <img src="/img/QRPhoto.png" className="w-40 h-auto mt-10" alt="QR Code" />
      </div>
    </div>
  );
}

export default InfoCraft;

