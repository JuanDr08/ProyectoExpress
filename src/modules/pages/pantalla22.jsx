import React, { useState, useEffect } from 'react';
import '../../css/pantalla22.css';

export const Pantalla22 = () => {
  return (
    <div>
      <header>
        <div className="box-atras">
          <img src={require('../../../../public/img/Group 53.png')} alt="triangulo" />
          <a href="#">
            <i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i>
          </a>
        </div>
        <div className="box-img">
          <img src={require('../../../../public/img/Rectangle 86.png')} alt="rombo" />
          <h5>Canjear <br /> cupón</h5>
        </div>
      </header>

      <main>
        <article className="canjear">
          <h4>¿Cuentas con algún cupón de descuento? <br /> Canjealo aquí</h4>
          <div className="box-canjear">
            <i className='bx bxs-discount' style={{ color: '#ffffff' }}></i>
            <form id="canjear-codigo" className="form">
              <input type="text" placeholder="Ingresa tu cupón" />
              <input className="validar" type="submit" data-action="validar-cupon" value="Validar" />
            </form>
          </div>
        </article>

        <section className="section-cupones">
          <article>
            <h4>Cupones Vigentes</h4>
            <p>Usar antes de la fecha de vencimiento</p>
          </article>
          <div className="box">
            <div className="box-img">
              <img src={require('../../../../public/img/y.jpg')} alt="" />
            </div>
            <div className="info">
              <div className="texto">
                <p>
                  <span className="porcentaje">50%</span> de descuento en cartucheras del taller <br />
                  <span className="taller">Awaq Ayllus</span>
                </p>
              </div>
              <p className="fecha-vencimiento">
                Fecha de vencimiento <span className="fecha"> 4/9/23 </span>
              </p>
              <button>Usar cupón</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
