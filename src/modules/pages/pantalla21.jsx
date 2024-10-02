import React, { useState, useEffect } from 'react';
import  styles from '../../css/pantalla21.module.css'
import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export const Pantalla21 = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const data = useLoaderData()
      // Estado para almacenar los talleres
  const [talleres, setTalleres] = useState([]);

    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda
    const [filteredData, setFilteredData] = useState(talleres); // Estado para almacenar los datos filtrados
     // Función que se ejecuta cuando el input de búsqueda cambia
     const handleSearch = (event) => {
      const term = event.target.value.toLowerCase(); // Convierte el texto a minúsculas
      setSearchTerm(term);
  
      // Filtra los datos según el término de búsqueda
      const filtered = talleres.filter((item) => {
        return (
          item.nombre_taller.toLowerCase().includes(term) || // Filtra por nombre del taller
          item.categoria.toLowerCase().includes(term) || // Filtra por categoría
          item.encargado.toLowerCase().includes(term) // Filtra por artesano
        );
      });
      
      setFilteredData(filtered); // Actualiza el estado con los datos filtrados
    }
    useEffect(() => {
     // Función para hacer la solicitud a la API
     const fetchTaller = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/workshops/`); 
          setTalleres(response.data); // Almacena los productos en el estado
          setFilteredData(response.data)
        } catch (error) {
          console.error('Error al obtener los productos', error);
        }
      };
  
    fetchTaller();
    
  }, [data, navigate]);
    return (
        <div className={styles.body}>
            <header className={styles.header}>
            <div className={styles.boxAtras}>
                <img src="/img/Group 53.png" alt="triangulo" />
                <Link to={-1}><i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i></Link>
            </div>
            <div className={styles.boxImg}>
                <img src="/img/Rectangle 86.png" alt="rombo" />
                <h5>Talleres <br /> educativos</h5>
            </div>
            </header>
            <main className={styles.main}>
            <div className={styles.searchContainer}>
                <div className={styles.buscador}>
                <i className='bx bx-search-alt' style={{ color: '#ffffff' }}></i>
                <input
                type="text"
                placeholder="Buscar taller, por categoría o artesano"
                value={searchTerm}
                onChange={handleSearch} />
                </div>
            </div>
            {filteredData.length > 0 ? (filteredData.map((item) => (
                <section className={styles.box} key={item._id}>
                <div className={styles.boxImg}>
                    <img src={item.imagen} alt="img-product" />
                </div>
                <div className={styles.info}>
                    <div className={styles.texto}>
                    <h4>Taller {item.nombre_taller}</h4>
                    <a href="#" className={styles.publico}>Para el público en general</a>
                    <p className={styles.dadoPor}>Taller dado por {item.encargado} los artesanos de {item.categoria}</p>
                    <p className={styles.nombreArtesano}>{item.nombre_taller}</p>
                    </div>
                    <button>
                    <a href="#">Entérate más sobre el taller aquí</a>
                    </button>
                </div>
                </section>
             ))
            ) : (
              <p>No se encontraron resultados.</p>
            )}
            </main>
        </div>
    );
};

