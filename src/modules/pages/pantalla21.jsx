import React, { useState, useEffect } from 'react';
import  styles from '../../css/pantalla21.module.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

export const Pantalla21 = () => {
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
                <i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i>
                </a>
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
                <input type="text" placeholder="Buscar taller, por categoría o artesano" />
                </div>
            </div>
            {Array.from({ length: 4 }).map((_, index) => (
                <section className={styles.box} key={index}>
                <div className={styles.boxImg}>
                    <img src="/img/y.jpg" alt="img-product" />
                </div>
                <div className={styles.info}>
                    <div className={styles.texto}>
                    <h4>Taller de bordado ayacuchado</h4>
                    <a href="#" className={styles.publico}>Para el público en general</a>
                    <p className={styles.dadoPor}>Taller dado por los artesanos de</p>
                    <p className={styles.nombreArtesano}>Taller Awaq Ayllus</p>
                    </div>
                    <button>
                    <a href="#">Entérate más sobre el taller aquí</a>
                    </button>
                </div>
                </section>
            ))}
            </main>
        </div>
    );
};

