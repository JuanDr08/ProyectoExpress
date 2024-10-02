import React, { useState, useEffect } from 'react';
import  styles from '../../css/pantalla20.module.css'
import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export const Pantalla20 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const data = useLoaderData();
  
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Redireccionar si no hay datos
    if (!data) {
      navigate('/register');
    } else {
      setUser([data.user]);
    }
    
    // Función para hacer la solicitud a la API
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/product`); // Reemplaza con la URL correcta
        setProductos(response.data); // Almacena los productos en el estado}
      } catch (error) {
        console.error('Error al obtener los productos', error);
      }
    };

    fetchProductos();
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
          <h5>
            Compras <br /> realizadas
          </h5>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.compras}>
          <div className={styles.compra}>
            <div className={styles.boxImg}>
              <img src="/img/y.jpg" alt="producto" />
            </div>
            <div className={styles.info}>
              <p className={styles.titulo}>Vasija pequeña con diseño de flor</p>
              <p className={styles.precio}>S/.50</p>
              <p className={styles.taller}>Ascc Pequeña Roma</p>
              <div className={styles.boxButton}>
                <button>
                  <a href="#">Ver seguimiento del producto</a>
                </button>
              </div>
            </div>
            <div className={styles.boxChat}>
              <i className="bx bx-comment-dots" style={{ color: '#ffffff' }}></i>
            </div>
          </div>
        </section>

        <h3>Sigue viendo más artesanías</h3>

        <section className={styles.verMas}>
          {/* Renderiza los productos obtenidos de la API */}
          {productos.map((producto) => (
            <div key={producto._id} className={styles.box}>
              <div className={styles.boxImg}>
                <img src={producto.img} alt='' />
              </div>
              <div className={styles.info}>
                <p className={styles.titulo}>{producto.nombre}</p>
                <p className={styles.precio}>S/.{producto.precio}</p>
                {/* <p className={styles.taller}>{producto.taller.nombre}</p> */}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
