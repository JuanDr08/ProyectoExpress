import React, { useState, useEffect } from 'react';
import  styles from '../../css/pantalla17.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// Componente para el ícono del corazón con funcionalidad de toggle
const Corazon = ({idProducto}) => {
  const [liked, setLiked] = useState(false);

  const toggleHeart = async () => {
    setLiked(!liked);
    const favorito = await axios.get(`http://localhost:3000/favorites/${id}`);
    if (favorito.data) setLiked(true);
    try {
      if (!liked) {
        // Si no está en favoritos, hacemos una petición POST para agregarlo
        await axios.post(`http://localhost:3000/favorites`, { id: idProducto });
        console.log("Producto añadido a favoritos");
      } else {
        // Si está en favoritos, hacemos una petición DELETE para eliminarlo
        await axios.delete(`http://localhost:3000/favorites/${idProducto}`);
        console.log("Producto eliminado de favoritos");
      }
    } catch (error) {
      console.error("Error al actualizar los favoritos:", error);
    }

  };

  return (
    <div className={styles.corazon} onClick={toggleHeart}>
      {liked ? (
        <i className="bx bxs-heart" style={{ color: '#ffa800' }}></i>
      ) : (
        <i className="bx bx-heart" style={{ color: '#ffa800' }}></i>
      )}
    </div>
  );
};

// Componente Header
const Header =({ img, idProducto }) => {
  const [tieneDescuento, setTieneDescuento] = useState(false);
  const [valorDescuento, setValorDescuento] = useState(0);
  const [cupon, setCupon] = useState([]);

  useEffect(()  => {
    // Buscar si hay un producto en cupon con el idProducto
    const fetchProducto = async () => {
      try {
        const cuponResponse = await axios.get(`http://localhost:3000/cupon/product/h`);
        setCupon(cuponResponse.data);
        const productoConDescuento = cuponResponse.data.find(
          (item) => item.productoInfo._id == idProducto
        );
        if (productoConDescuento) {
          setTieneDescuento(true);
          setValorDescuento(productoConDescuento.decuento);
        } else {
          setTieneDescuento(false);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    fetchProducto();
  }, [idProducto]);
  return (
  <header className={styles.header}>
    <div className={styles.boxAtras}>
      <img src="/img/Group 53.png" alt="triangulo" />
      <Link to={-1}><i className='bx bx-arrow-back' style={{ color: '#ffa800' }}></i></Link>
    </div>
    <div className={styles.boxImg}>
      <img src={img} alt="imagen del producto" />
    </div>
    <div className={`${styles.descuento} ${tieneDescuento ? '' : styles.invisible}`}>
        <i className="bx bxs-certification" style={{ color: '#9d1a1a' }}></i>
        <p>-<span>{valorDescuento}</span>%</p>
    </div>
  </header>
)};

// Componente Main
const MainContent = ({ idProducto, cupon, nombre, precio, descripcion, dimensiones, categoria }) => {
  const [precioDescuento, setPrecioDescuento] = useState(precio);
  const [condicion, setCondicion] = useState(false);
  const [descuento, setDescuento] = useState(null);
  useEffect(() => {
    // Verificar si existe un cupón para el producto
    const cuponEncontrado = cupon.find(c => c.productoInfo._id === idProducto);
    
    if (cuponEncontrado) {
      const descuentoPorcentaje = parseFloat(cuponEncontrado.decuento);
      setDescuento(descuentoPorcentaje);

      // Calcular el precio con descuento
      const nuevoPrecio = precio - (precio * descuentoPorcentaje / 100);
      setPrecioDescuento(nuevoPrecio);

      // Quitar la clase invisible y actualizar el estado de condición
      setCondicion(true);
    } else {
      // Si no hay cupón, mantener el precio original
      setPrecioDescuento(precio);
      setCondicion(false);
    }
  }, [idProducto, precio, cupon]);

  const addCarrito = async () => {
      await axios.post(`http://localhost:3000/carrito${{idProducto}}`,);
      console.log("Producto añadido a carrito");
  };

return (
  <main className={styles.main}>
    <div className={styles.titulo}>
      <div className={styles.trianImg}>
        <img src="/img/Group 53.png" alt="triángulo decorativo" />
      </div>
      <h4 className={styles.nombre}>{nombre}</h4>
    </div>
    <article className={styles.article}>
      <Corazon idProducto={idProducto}/>
      <div className={styles.info}>
      <span className={`${styles.precio} ${condicion ? styles.invisible : ''}`}>
            S/.{precio}
          </span>
          <span className={`${styles.precio} ${condicion ? '' : styles.invisible}`}>
            <span className={styles.antiguo}>S/.{precio}</span> S/.{precioDescuento.toFixed(2)}
          </span>
        <span className={styles.taller}>{categoria}</span>
        <p className={styles.dimensiones}>
          <span>Dimensiones:</span> {dimensiones}
        </p>
        <p className={styles.descripcion}>
          <span>Descripción:</span> {descripcion}
        </p>
      </div>
      <div className={styles.envio}>
        <i className="bx bx-check-shield" style={{ color: '#ffa800' }}></i>
        <p>Cuenta con envío hacia tu ubicación</p>
      </div>
      <div className={styles.carrito}>
        <button onClick={addCarrito}>
          <i className="bx bx-cart-download" style={{ color: '#ffffff' }}></i>
          Añadir a mi carrito de compras
        </button>
      </div>
    </article>
  </main>
)};

// Componente principal
const Pantalla17 = () => {
  const { id } = useParams(); // Obtener el ID de la URL
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [cupon, setCupon] = useState([]);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/product/${id}`);
        setProducto(response.data); // Guardar los datos del producto en el estado
      
        const cuponResponse = await axios.get(`http://localhost:3000/cupon/product/h`);
        setCupon(cuponResponse.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        // navigate('/home');
      }
    };

    fetchProducto();
  }, [id, navigate]);

  if (!producto) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className={styles.body}>
      <Header 
      cupon={cupon}
      img={producto.img} 
      idProducto={producto._id}
      />
      <MainContent
        idProducto={producto._id}
        nombre={producto.nombre}
        precio={producto.precio}
        descripcion={producto.descripcion}
        dimensiones={producto.dimensiones}
        categoria={producto.categoria}
        cupon={cupon}
      />
    </div>
  );
};

export default Pantalla17;
