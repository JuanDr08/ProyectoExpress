import React from 'react';

// Definir el componente
function Entrada() {
    return (
      <div className='bg-[url(/img/ImagenFondoEntrada.png)] bg-cover bg-center h-screen flex items-center justify-center relative bg-[#703A31]'>
        <div className='text-center flex items-center justify-center flex-col'>
          <img src='/img/TituloEntrada.png' alt="Título" className='mb-8 w-3/4' />
          <ul className='space-y-6'  > {/* Aumentado el espacio entre los elementos */}
            <li>
              <button className='flex items-center justify-center bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-15'> 
                <img src='/img/FacebookLogo.png' alt="Facebook" className='mr-2 w-5 h-5' />
                Regístrate con Facebook
              </button>
            </li>
            <li>
              <button className='flex items-center justify-center bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-15'>
                <img src='/img/FacebookLogo.png' alt="Discord" className='mr-2 w-5 h-5' />
                Regístrate con Discord
              </button>
            </li>
            <li>
              <button className='flex items-center justify-center bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-15'>
                <img src='/img/FacebookLogo.png' alt="Google" className='mr-2 w-5 h-5' />
                Regístrate con Google
              </button>
            </li>
            <li>
              <button className='flex items-center justify-center bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-15'>
                <img src='/img/FacebookLogo.png' alt="Other" className='mr-2 w-5 h-5' />
                Regístrate con Otro
              </button>
            </li>
            <li>
              <button className='flex items-center justify-center bg-[#703A31] text-white px-4 py-2 rounded hover:bg-[#6a2926] transition text-lg w-15'>
                <img src='/img/FacebookLogo.png' alt="Other" className='mr-2 w-5 h-5' />
                Regístrate con Otro
              </button>
            </li>
          </ul>
  
          <div className='mt-8'> {/* Aumentado el margen superior */}
            <h3 className='text-lg font-semibold text-gray-700'>¿Ya tienes una cuenta?</h3> {/* Aumentado el tamaño de la letra */}
            <li>
              <a href="#" className='text-[#703A31] hover:underline text-lg'>Inicia sesión</a> {/* Aumentado el tamaño de la letra */}
            </li>
          </div>
        </div>
      </div>
    );
  }
  

export default Entrada;

/* image 1 */


