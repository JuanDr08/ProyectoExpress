import React from 'react';

function InicioSesion() {
  return (
    <div className='bg-[url(/img/ImagenFondoEntrada.png)] bg-cover bg-center h-screen flex items-center justify-center relative bg-[#703A31]'>
      <div className='text-center flex flex-col items-center justify-center'>
        <img src='/img/IniciaSesionTitulo.png' alt="Título" className='mb-8 w-3/4 mx-auto' /> {/* Imagen centrada */}
        
        <ul className='space-y-6 w-64'> {/* Lista centrada con ancho fijo */}
          <li>
            <button className='flex items-center justify-start bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-full text-left'> 
              <img src='/img/FacebookLogo.png' alt="Facebook" className='mr-2 w-5 h-5' />
              Inicia sesión con Facebook
            </button>
          </li>
          <li>
            <button className='flex items-center justify-start bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-full text-left'>
              <img src='/img/FacebookLogo.png' alt="Discord" className='mr-2 w-5 h-5' />
              Inicia sesión con Instagram
            </button>
          </li>
          <li>
            <button className='flex items-center justify-start bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-full text-left'>
              <img src='/img/FacebookLogo.png' alt="Google" className='mr-2 w-5 h-5' />
              Inicia sesión con Gmail
            </button>
          </li>
          <li>
            <button className='flex items-center justify-start bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-full text-left'>
              <img src='/img/FacebookLogo.png' alt="Other" className='mr-2 w-5 h-5' />
              Inicia sesión con tu cuenta de Ruraq Maki
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InicioSesion;