import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar el hook useNavigate


// Definir el componente
function Carga() {
  const navigate = useNavigate(); // Crear una instancia de useNavigate

  useEffect(() => {
    // Temporizador que redirige después de 3 segundos
    const timer = setTimeout(() => {
      navigate('/register'); // Reemplaza '/siguiente-pagina' con la ruta a la que deseas redirigir
    }, 3000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='bg-[url(/img/Fondo.png)] bg-cover bg-center h-screen flex items-center justify-center'>
        <img src='/img/ruraq_maki.png' alt="Centrada" className="w-64 h-auto animate-fade-in-out"/>
    </div>
  );
}

export default Carga;
