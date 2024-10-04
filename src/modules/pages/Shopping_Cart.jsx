import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";


export function ShoppingCart() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const data = useLoaderData()
    const [productos, setProductos] = useState([]);
    const [taller, setTaller] = useState([]);


    useEffect(()=> {

        // if (!data) navigate('/register')
        // console.log(data.user)
        // setUser([data.user])

         // Función para hacer la solicitud a la API
    const fetchProductos = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/user/cart/details`);
          setProductos(response.data.data); // Almacena los productos en el estado
          if (response.data.data.length > 0) {
              setTaller(response.data.data[0].nombre_taller); // Asignar el nombre del taller
          }
        } catch (error) {
          console.error('Error al obtener los productos', error);
        }
      };
      fetchProductos();

    },[])
    const subtotal = productos.reduce((acc, item) => acc + item.carrito.precio * item.carrito.cantidad, 0);
    const shippingCost = 20; 
    const total = subtotal + shippingCost;


    return (
        <main>
            <Header />

            <div className="upper flex flex-col p-5 gap-2">
                <span className="text-lg font-bold text-[var(--color-9D1A1A)]">Tu carrito de compras</span>
                <small className="text-[var(--color-9D1A1A)] opaprice-50">Revisa aquí los productos que añadiste a tu carrito</small>
            </div>

            <div className="grid grid-cols-1 gap-4 p-3">
                {productos.map((item, index) => (
                        <div key={index} className="bg-[var(--color-703A31)] rounded-lg overflow-hidden shadow-md h-[150px] justify-around items-center flex">
                            <img src={item.carrito.img} className="w-[130px] h-[130px] object-cover" style={{ borderRadius: '10px' }} />
                            <div className="flex flex-col">
                                <h3 className="text-white text-sm">{item.carrito.nombre}</h3>
                                <p className="text-gray-300 text-sm">COP {item.carrito.precio}</p>
                                <p className="text-gray-300 text-sm">{item.carrito.dimensiones}</p>
                                <p className="text-gray-300 text-sm">{taller}</p>
                                <div className="addsubstract flex text-white justify-around bg-[var(--color-2E1108)] rounded-lg">
                                    <button >-</button>
                                        <div>{item.carrito.cantidad}</div>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="coupon flex justify-center items-center">
                <Link to={'/coupon'}>
                    <div className="bg-[var(--color-703A31)] w-[100%] h-10 flex items-center justify-center rounded-lg text-white">
                    Añadir cupón de descuento
                    </div>
                </Link>
            </div>

            <div className="subt mt-5 flex justify-center">
                <div className="bg-[var(--color-703A31)] shadow-lg rounded-lg p-4 w-[90%]">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-white">Subtotal</p>
                            <p className="text-white opacity-50">Gastos de envío</p>
                        </div>
                        <div>
                            <p className="text-white">COP {subtotal}</p>
                            <p className="text-white opacity-50">COP {shippingCost}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subt mt-5 flex justify-center">
                <div className="bg-[var(--color-703A31)] shadow-lg rounded-lg p-4 w-[90%]">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-white">Total</p>
                        </div>
                        <div>
                        <p className="text-white">COP {total}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="mt-5 flex items-center justify-center w-[150px] h-[50px] bg-[var(--color-2E1108)] text-white rounded-lg">
                    Realizar Compra
                </button>
            </div>

            <Footer />
        </main>
    );
}
