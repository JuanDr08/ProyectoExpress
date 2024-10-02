import React, { useState, useEffect } from 'react';
import  styles from '../../css/pantalla20.module.css'
import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export const Pantalla20 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const data = useLoaderData();
  const [errorMessage, setErrorMessage] = useState('');
  
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    // Redireccionar si no hay datos
    
    
    // Función para hacer la solicitud a la API
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/product`);
        setProductos(response.data); // Almacena los productos en el estado}
      } catch (error) {
        console.error('Error al obtener los productos', error);
      }
    };
    fetchProductos();
    
    const fecthCompras = async () => {
      try {
        const compra = await axios.get(`http://localhost:3000/user/purchases/details`);
        setCompras(compra.data); // Almacena los productos en el estado}
      } catch (error) {
        console.error('No ha ehcho compras', error);
        setErrorMessage('No hay compras todavia')
         return
      }
    };
    fecthCompras();


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
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          {/* Renderiza las coompras obtenidos de la API */}
          {compras.map((compra) => (
            <div key={compra._id} className={styles.compra}>
              <div className={styles.boxImg}>
                <img src={compra.img} alt="compra" />
              </div>
              <div className={styles.info}>
                <p className={styles.titulo}>{compra.nombre}</p>
                <p className={styles.precio}>{compra.precio}</p>
                <p className={styles.taller}>Asoc. {compra.taller}</p>
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
          ))}
        </section>

        <h3>Sigue viendo más artesanías</h3>

        <section className={styles.verMas}>
          {/* Renderiza los productos obtenidos de la API */}
          {productos.map((producto) => (
            <div key={producto._id} className={styles.box}>
              <Link to={`/product/${producto._id}`}>
                <div className={styles.boxImg}>
                  <img src={producto.img} alt='' />
                </div>
                <div className={styles.info}>
                  <p className={styles.titulo}>{producto.nombre}</p>
                  <p className={styles.precio}>S/.{producto.precio}</p>
                  {/* <p className={styles.taller}>{producto.taller.nombre}</p> */}
                </div>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
