import React, { useState } from 'react';
import '../../css/pantalla19.css';


export const Pantalla19 = () => {
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
            Tus artesanías <br /> favoritas
          </h5>
        </div>
      </header>
      <main>
        <section className="categorias"></section>
        <section className="productos">
          <div className="producto">
            <div className="box">
              <div className="box-img">
                <img src="/img/y.jpg" alt="producto" />
              </div>
              <div className="info">
                <p className="nombre">Chullo II</p>
                <p className="precio">S/.250</p>
                <p className="taller">Nación O'ero</p>
              </div>
            </div>
            <div className="x">
              <i className="bx bx-x" style={{ color: '#ffa800' }}></i>
            </div>
          </div>

          <div className="producto">
            <div className="box">
              <div className="box-img">
                <img src="/img/y.jpg" alt="producto" />
              </div>
              <div className="info">
                <p className="nombre">Perchera de champe Xame</p>
                <p className="precio">S/.250</p>
                <p className="taller">Nación O'ero</p>
              </div>
            </div>
            <div className="x">
              <i className="bx bx-x" style={{ color: '#ffa800' }}></i>
            </div>
          </div>

          <div className="producto">
            <div className="box">
              <div className="box-img">
                <img src="/img/y.jpg" alt="producto" />
              </div>
              <div className="info">
                <p className="nombre">Perchera de champe Xame</p>
                <p className="precio">S/.250</p>
                <p className="taller">Nación O'ero</p>
              </div>
            </div>
            <div className="x">
              <i className="bx bx-x" style={{ color: '#ffa800' }}></i>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

