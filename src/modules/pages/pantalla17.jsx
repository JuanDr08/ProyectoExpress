import React, { useState, useEffect } from 'react';
import '../../css/pantalla17.css';
import { Link } from 'react-router-dom';

// Componente para el ícono del corazón con funcionalidad de toggle
const Corazon = () => {
  const [liked, setLiked] = useState(false);

  const toggleHeart = () => {
    setLiked(!liked);
  };

  return (
    <div className="corazon" onClick={toggleHeart}>
      {liked ? (
        <i className="bx bxs-heart" style={{ color: '#ffa800' }}></i>
      ) : (
        <i className="bx bx-heart" style={{ color: '#ffa800' }}></i>
      )}
    </div>
  );
};

// Componente Header
const Header = () => (
  <header>
    <div className="box-atras">
      <img src="/img/Group 53.png" alt="triangulo" />
      <Link to="#">
        <i className="bx bx-arrow-back" style={{ color: '#ffa800' }}></i>
      </Link>
    </div>
    <div className="box-img">
      <img src="/img/y.jpg" alt="imagen del producto" />
    </div>
    <div className="descuento invisible">
      <i className="bx bxs-certification" style={{ color: '#9d1a1a' }}></i>
      <p>-35%</p>
    </div>
  </header>
);

// Componente Main
const MainContent = () => (
  <main>
    <div className="titulo">
      <div className="trian-img">
        <img src="/img/Group 53.png" alt="triángulo decorativo" />
      </div>
      <h4 className="nombre">Tapiz Chumpi Andino III</h4>
    </div>
    <article>
      <Corazon />
      <div className="info">
        <span className="precio">S/.600</span>
        <span className="precio invisible">
          <span className="antiguo">S/.600</span>S/.65
        </span>
        <span className="taller">Taller Awaq Ayllus</span>
        <p className="dimensiones">
          <span>Dimensiones:</span> 60 x 80 cm
        </p>
        <p className="descripcion">
          <span>Descripción:</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempore veniam quaerat vel delectus fugit possimus quidem iste maiores velit, odio architecto debitis non? Tempore incidunt voluptatibus molestiae quasi harum.
        </p>
      </div>
      <div className="envio">
        <i className="bx bx-check-shield" style={{ color: '#ffa800' }}></i>
        <p>Cuenta con envío hacia tu ubicación</p>
      </div>
      <div className="carrito">
        <button>
          <i className="bx bx-cart-download" style={{ color: '#ffffff' }}></i>
          Añadir a mi carrito de compras
        </button>
      </div>
    </article>
  </main>
);

// Componente principal
const Pantalla17 = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

export default Pantalla17;
