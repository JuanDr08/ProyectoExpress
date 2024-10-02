import React, { useState, useEffect } from 'react';
import  styles from '../../css/pantalla22.module.css'
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Pantalla22 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const data = useLoaderData()
  const [cupones, setCupones] = useState(null)
  const [cuponDetalles, setCupon] = useState(null)


  useEffect(()=> {
    const fetchCupon = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/coupons/details`); 
        setCupon(response.data.data[0]); // Almacena los productos en el estado
        setCupones(response.data.data[0].cupones)
        console.log(response.data.data[0])
      } catch (error) {
        console.error('Error al obtener los productos', error);
      }
    };

    fetchCupon();
  //     if (!data) navigate('/register')
  //     console.log(data.user)
  //     setUser([data.user])

  },[data, navigate])
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
          { cuponDetalles && [cuponDetalles].map((c) => (
            <div key={c._id}>
              {[cupones].map((cupon) => ( 
                <div key={cupon._id} className={styles.box}>
                  <div className={styles.boxImg}>
                    <img src={c.img} alt="" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.texto}>
                      <p>
                        <span className={styles.porcentaje}>{cupon.descuento}%</span> de descuento en cartucheras del taller <br />
                        <span className={styles.taller}>{c.nombre_taller}</span>
                      </p>
                    </div>
                    <p className={styles.fechaVencimiento}>
                      Fecha de vencimiento <span className={styles.fecha}> {cupon.fechaVencimiento} </span>
                    </p>
                    <button>Usar cupón</button>
                  </div>
                </div>
                ))}
            </div>
            ))}
        </section>
      </main>
    </div>
  );
};
