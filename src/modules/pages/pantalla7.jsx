import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import  styles from '../../css/pantalla7.module.css'

export default function Pantalla7() {
  const location = useLocation();
  const { username, numeroCelular, sex, day, month, year } = location.state;
  console.log(location.state, numeroCelular)
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const isRegisterButtonDisabled = !checkbox1 || !checkbox2;
  const isSubrayado = checkbox1 && checkbox2; // Verificar si ambas condiciones se cumplen

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.boxAtras}>
          <img src=".././../../../public/img/Group 53.png" alt="triangulo" />
          <Link to={-1}><i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i></Link>
        </div>
        <div className={styles.boxImg}>
          <img src="../../../../public/img/triangulo_2.png" alt="triangulo_2" />
        </div>
      </header>
      <main>
        <article className={styles.article}>
          <div className={styles.box1}>
            <input 
              type="checkbox" 
              checked={checkbox1} 
              onChange={() => setCheckbox1(!checkbox1)} 
              id="checkbox_1" 
            />
            <label htmlFor="checkbox_1"></label>
            <p className={styles.p}>
              He leído y acepto la <span className={styles.span}><a href="#">Política de privacidad*</a></span>
            </p>
          </div>
          <div className={styles.box2}>
            <input 
              type="checkbox" 
              checked={checkbox2} 
              onChange={() => setCheckbox2(!checkbox2)} 
              id="checkbox_2" 
            />
            <label htmlFor="checkbox_2"></label>
            <p className={styles.p}>
              He leído y acepto los <span><a href="#">Términos y condiciones*</a></span>
            </p>
          </div>
          <div className={styles.box3}>
            <input type="checkbox" id="checkbox_3" />
            <label htmlFor="checkbox_3"></label>
            <p>Acepto que me envíen promociones y eventos a mi número de celular</p>
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
        <div className={styles.boxAdelante}>
          <i className='bx bx-chevron-right'></i>
          <a 
            href={isRegisterButtonDisabled ? undefined : "/home"} 
            id="registerButton" 
            className={`${isRegisterButtonDisabled ? styles.disabled : ''} ${isSubrayado ? styles.subrayado : ''}`} 
          >
            Registrarse
          </a>
        </div>
      </footer>
    </div>
  );
}
