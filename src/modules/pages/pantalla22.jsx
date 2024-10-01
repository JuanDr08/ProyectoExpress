import React, { useState, useEffect } from 'react';
import  styles from '../../css/pantalla22.module.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

export const Pantalla22 = () => {
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
          <img src='../../../../public/img/Group 53.png' alt="triangulo" />
          <a href="#">
            <i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i>
          </a>
        </div>
        <div className={styles.boxImg}>
          <img src='../../../../public/img/Rectangle 86.png' alt="rombo" />
          <h5>Canjear <br /> cupón</h5>
        </div>
      </header>

      <main className={styles.main}>
        <article className={styles.canjear}>
          <h4>¿Cuentas con algún cupón de descuento? <br /> Canjealo aquí</h4>
          <div className={styles.boxCanjear}>
            <i className='bx bxs-discount' style={{ color: '#ffffff' }}></i>
            <form id="canjear-codigo" className={styles.form}>
              <input className={styles.input1} type="text" placeholder="Ingresa tu cupón" />
              <input className={styles.validar} type="submit" data-action="validar-cupon" value="Validar" />
            </form>
          </div>
        </article>

        <section className={styles.sectionCupones}>
          <article>
            <h4>Cupones Vigentes</h4>
            <p>Usar antes de la fecha de vencimiento</p>
          </article>
          <div className={styles.box}>
            <div className={styles.boxImg}>
              <img src='../../../../public/img/y.jpg' alt="" />
            </div>
            <div className={styles.info}>
              <div className={styles.texto}>
                <p>
                  <span className={styles.porcentaje}>50%</span> de descuento en cartucheras del taller <br />
                  <span className={styles.taller}>Awaq Ayllus</span>
                </p>
              </div>
              <p className={styles.fechaVencimiento}>
                Fecha de vencimiento <span className={styles.fecha}> 4/9/23 </span>
              </p>
              <button>Usar cupón</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
