import React, { useState, useEffect } from 'react'

import { Muesca } from '../components/Muesca';
import { useLoaderData, useNavigate } from 'react-router-dom';

function TallerCeramica() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const data = useLoaderData()


    useEffect(()=> {

      if (!data) navigate('/register')
      console.log(data.user)
      setUser([data.user])

    },[])

  return (
    <div className="relative w-full h-full">
      {/* Muesca en la esquina superior izquierda */}
      <div className="absolute top-0 left-0">
        <Muesca />
      </div>

      {/* Imagen que cubre 2/5 partes de la pantalla */}
      <div className="w-full h-2/5">
        <img
          src="/img/CraftsWorshopPhoto.png"
          alt="Taller de Cerámica"
          className="object-cover w-full h-full"
        />
      </div>
        <div className="text-white bg-[#2E1108] relative flex items-center h-[3em]">
          {/* Triángulo apuntando hacia el título */}
          <img src='/img/Rectangle.png' className='w-5'/>
          {/* Título del taller */}
          <h2 className="text-2xl font-bold ml-4 text-[1.1em]">Taller de Cerámica Artesanal</h2>
        </div>

      <div className="flex flex-col p-4 space-y-4">

        {/* Descripción del taller */}
        <p >
          En este taller dado por los artesanos de Cerámicas Tater Vera aprenderán a usar la arcilla para crear cosas para el hogar con diseños típicos Santandereanos.
        </p>

        {/* Especificaciones del taller */}
        <div className=" space-y-2">
          <p><strong className="text-[1.2em]">Para el público en general</strong></p>
          <p style={{ color: '#9D1A1A' }} className='text-[.85em]'>*Los niños menores de 8 años se recomienda que estén acompañados de un adulto</p>
          <p><strong className="text-[--color-9D1A1A]">Duración:</strong> 2 meses</p>
          <p><strong className="text-[--color-9D1A1A]">Fecha de inicio:</strong> 8 de Julio</p>
          <p><strong className="text-[--color-9D1A1A]">Horario:</strong> 4 a 6 PM cada sábado</p>
          <p><strong className="text-[--color-9D1A1A]">Materiales:</strong> Materiales dados en clase</p>
          <p><strong className="text-[--color-9D1A1A]">Modalidad:</strong> Presencial</p>
          <p><strong className="text-[--color-9D1A1A]">Lugar:</strong> En el Ministerio de Cultura, Santander Colombia</p>
        </div>

        {/* Botón de inscripción */}
        <div className="flex items-center gap-5 pt-5">
          <button className="flex justify-center items-center bg-[--color-2E1108] w-[12em] h-[2.5em] rounded-lg text-white ">
            <img
              src="/img/BookInscription.png"
              alt="Icono de inscripción"
              className="w-6 h-auto mr-2"
            />
            Inscribirse al taller
          </button>
          <label className="text-[--color-9D1A1A] text-[.8em]">*Cupos limitados</label>
        </div>
      </div>
    </div>
  );
}

export default TallerCeramica;