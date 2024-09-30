import React, { useState } from 'react';
import '../../css/pantalla20.css';


export const Pantalla20 = () => {
  return (
    <div>
      <header>
        <div className="box-atras">
          <img src="/img/Group 53.png" alt="triangulo" />
          <a href="#">
            <i className="bx bx-arrow-back" style={{ color: '#ffa800' }}></i>
          </a>
        </div>
        <div className="box-img">
          <img src="/img/Rectangle 86.png" alt="rombo" />
          <h5>
            Compras <br /> realizadas
          </h5>
        </div>
      </header>
      <main>
        <section className="compras">
          <div className="compra">
            <div className="box-img">
              <img src="/img/y.jpg" alt="producto" />
            </div>
            <div className="info">
              <p className="titulo">Vasija pequeña con diseño de flor</p>
              <p className="precio">S/.50</p>
              <p className="taller">Ascc Pequeña Roma</p>
              <div className="box-button">
                <button>
                  <a href="#">Ver seguimiento del producto</a>
                </button>
              </div>
            </div>
            <div className="box-chat">
              <i className="bx bx-comment-dots" style={{ color: '#ffffff' }}></i>
            </div>
          </div>
        </section>
        <h3>Sigue viendo más artesanías</h3>
        <section className="ver-mas">
          <div className="box">
            <div className="box-img">
              <img src="/img/y.jpg" alt="producto" />
            </div>
            <div className="info">
              <p className="titulo">Vasija pequeña con diseño de flor</p>
              <p className="precio">S/.50</p>
              <p className="taller">Ascc Pequeña Roma</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

