import React, { useState, useEffect } from 'react';
import '../../css/pantalla21.css';

export const Pantalla21 = () => {
    return (
        <div>
            <header>
                <div className="box-atras">
                    <img src=".././../../../public/img/Group 53.png" alt="triangulo" />
                    <a href="#"><i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i></a>
                </div>
                <div className="box-img">
                    <img src="../../../../public/img/Rectangle 86.png" alt="rombo" />
                    <h5>Talleres <br /> educativos</h5>
                </div>
            </header>
            <main>
                <div className="search-container">
                    <div className="buscador">
                        <i className='bx bx-search-alt' style={{ color: '#ffffff' }}></i>
                        <input type="text" placeholder="Buscar taller, por categoría o artesano" />
                    </div>
                </div>
                {Array.from({ length: 4 }).map((_, index) => (
                    <section className="box" key={index}>
                        <div className="box-img">
                            <img src="../../../../public/img/y.jpg" alt="img-product" />
                        </div>
                        <div className="info">
                            <div className="texto">
                                <h4>Taller de bordado ayacuchado</h4>
                                <a href="#" className="publico">Para el público en general</a>
                                <p className="dado-por">Taller dado por los artesanos de</p>
                                <p className="nombre-artesano">Taller Awaq Ayllus</p>
                            </div>
                            <button><a href="#">Entérate más sobre el taller aquí</a></button>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

