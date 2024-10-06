import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate, useLoaderData } from 'react-router-dom';
import  styles from '../../css/pantalla7.module.css'
import axios from 'axios';
import { Muesca } from '../components/Muesca';

export function Pantalla7() {

  const navigate = useNavigate();
  const data = useLoaderData()

  useEffect(()=> {
    if (data) navigate('/home')
  },[])

  const location = useLocation();
  const formToSend = location.state;

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const isRegisterButtonDisabled = !checkbox1 || !checkbox2;
  const isSubrayado = checkbox1 && checkbox2; // Verificar si ambas condiciones se cumplen

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    //console.log(isRegisterButtonDisabled)
    if (!isRegisterButtonDisabled) {
      const direccion = await axios.post('http://localhost:3000/register/auth/ruraqmaki', formToSend, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
      console.log(direccion)
      //console.log(direccion)
      navigate("/login/credentials")
    } else {
      navigate("/register/TermsAndConditions")
    }
  };
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.boxAtras}>
          <Muesca></Muesca>
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
            href="#" 
            id="registerButton" 
            onClick={handleRegisterClick}
            className={`${isRegisterButtonDisabled ? styles.disabled : ''} ${isSubrayado ? styles.subrayado : ''}`} 
          >
            Registrarse
          </a>
        </div>
      </footer>
    </div>
  );
}
