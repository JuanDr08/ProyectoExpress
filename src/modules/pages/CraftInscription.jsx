import React from 'react'

import { Muesca } from '../components/Muesca';

function TallerCeramica() {
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

      {/* Contenedor con fondo marrón para la información del taller */}
      <div className="text-white space-y-4">
        <div className="bg-[#2E1108] relative flex items-center">
          {/* Triángulo apuntando hacia el título */}
          <img src='/img/Rectangle.png' className='w-5'/>
          {/* Título del taller */}
          <h2 className="text-2xl font-bold ml-4">Taller de Cerámica Artesanal</h2>
        </div>

        {/* Descripción del taller */}
        <p className="text-sm">
          En este taller dado por los artesanos de Cerámicas Tater Vera aprenderán a usar la arcilla para crear cosas para el hogar con diseños típicos ayacuchanos.
        </p>

        {/* Especificaciones del taller */}
        <div className="text-sm space-y-2">
          <p><strong>Para el público en general</strong></p>
          <p>*Los niños menores de 8 años se recomienda que estén acompañados de un adulto</p>
          <p><strong>Duración:</strong> 2 meses</p>
          <p><strong>Fecha de inicio:</strong> 8 de Julio</p>
          <p><strong>Horario:</strong> 4 a 6 PM cada sábado</p>
          <p><strong>Materiales:</strong> Materiales dados en clase</p>
          <p><strong>Modalidad:</strong> Presencial</p>
          <p><strong>Lugar:</strong> En el Ministerio de Cultura, Santander Colombia</p>
        </div>

        {/* Botón de inscripción */}
        <button className="bg-[#8B5A48] text-white py-2 px-4 flex items-center rounded-lg mt-4">
          <img
            src="/img/BookInscription.png"
            alt="Icono de inscripción"
            className="w-6 h-auto mr-2"
          />
          Inscribirse al taller
        </button>
      </div>
    </div>
  );
}

export default TallerCeramica;