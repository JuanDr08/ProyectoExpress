import React, { useState } from 'react';
import  styles from '../../css/pantalla20.module.css'
import { useLoaderData, useNavigate } from 'react-router-dom';


export const Pantalla20 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const data = useLoaderData()


  useEffect(()=> {

      if (!data) navigate('/register')
      console.log(data.user)
      setUser([data.user])

  },[])
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.boxAtras}>
          <img src="/img/Group 53.png" alt="triangulo" />
          <a href="#">
            <i className="bx bx-arrow-back" style={{ color: '#ffa800' }}></i>
          </a>
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
          <div className={styles.box}>
            <div className={styles.boxImg}>
              <img src="/img/y.jpg" alt="producto" />
            </div>
            <div className={styles.info}>
              <p className={styles.titulo}>Vasija pequeña con diseño de flor</p>
              <p className={styles.precio}>S/.50</p>
              <p className={styles.taller}>Ascc Pequeña Roma</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

