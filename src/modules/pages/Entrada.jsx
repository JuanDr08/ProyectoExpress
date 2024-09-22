import React from 'react';

function Entrada() {
  return (
    <div className='bg-[url(/img/ImagenFondoEntrada.png)] bg-cover bg-center h-screen flex items-center justify-center relative bg-[#703A31]'>
      <div className='text-center flex flex-col items-center justify-center'>
        <img src='/img/TituloEntrada.png' alt="Título" className='mb-8 w-3/4 mx-auto' /> {/* Imagen centrada */}
        
        <ul className='space-y-6 w-64'> {/* Lista centrada con ancho fijo */}
          <li>
            <button className='flex items-center justify-start bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-full text-left'> 
              <img src='/img/FacebookLogo.png' alt="Facebook" className='mr-2 w-5 h-5' />
              Regístrate con Facebook
            </button>
          </li>
          <li>
            <button className='flex items-center justify-start bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-full text-left'>
              <img src='/img/FacebookLogo.png' alt="Discord" className='mr-2 w-5 h-5' />
              Regístrate con Discord
            </button>
          </li>
          <li>
            <button className='flex items-center justify-start bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-full text-left'>
              <img src='/img/FacebookLogo.png' alt="Google" className='mr-2 w-5 h-5' />
              Regístrate con Google
            </button>
          </li>
          <li>
            <button className='flex items-center justify-start bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-full text-left'>
              <img src='/img/FacebookLogo.png' alt="Other" className='mr-2 w-5 h-5' />
              Regístrate con Otro
            </button>
          </li>
        </ul>

        <div className='mt-8 text-center'> {/* Centramos la sección de inicio de sesión */}
          <h3 className='text-lg font-semibold text-white'>¿Ya tienes una cuenta?</h3> {/* Texto blanco */}
          <li>
            <a href="#" className='text-white hover:underline text-lg'>Inicia sesión</a> {/* Texto blanco */}
          </li>
        </div>
      </div>
    </div>
  );
}

export default Entrada;




/* image 1 */


