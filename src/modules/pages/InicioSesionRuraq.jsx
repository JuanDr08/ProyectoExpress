import React, { useEffect } from 'react';
import { Muesca } from '../components/Muesca';
import { useLoaderData, useNavigate } from 'react-router-dom';

function InicioSesionRuraq() {

  const navigate = useNavigate();
    const data = useLoaderData()


    useEffect(()=> {
        if (data) navigate('/home')
    },[])

  return (
    <>
      {/* Imagen en la esquina superior derecha */}
      <Muesca/>
      <img 
        src="/img/EsquinaSuperiorInicioSesionRuraq.png" 
        className="absolute top-0 right-0 w-48 h-auto" // Cambiado a la esquina superior derecha y tamaño ajustado
        alt="Esquina Superior"
      />

      <div className="flex items-center justify-center h-[78vh] bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          {/* Campo para el nombre de usuario, celular o correo */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Nombre de usuario, celular o correo
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 mb-4 border rounded bg-[#2E1108] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#703A31]"
            placeholder="Ingresa tu nombre de usuario"
          />

          {/* Campo para la contraseña */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 mb-6 border rounded bg-[#2E1108] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#703A31]"
            placeholder="Ingresa tu contraseña"
          />

          {/* Botón para iniciar sesión con estilo de enlace */}
          <div className="mt-4 text-center">
            <a href="#" className="text-[#703A31] hover:underline">
              Iniciar sesión
            </a>
          </div>

          {/* Enlace para "¿Olvidaste tu contraseña?" */}
          <div className="mt-4 text-center">
            <a href="#" className="text-[#703A31] hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>

      {/* Imagen en la parte inferior */}
      <img 
        src="/img/EsquinaInferiorInicioSesionRuraq.png" 
        className="w-48 h-auto mt-4" 
        alt="Esquina Inferior"
      />
    </>
  );
}

export default InicioSesionRuraq;
