import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { PurchaseConfirmation } from "../components/PurchaseConfirmation";
import axios from "axios";


export function ShoppingCart() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const data = useLoaderData()

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [productos, setProductos] = useState([]);
    const [taller, setTaller] = useState([]);
    const [productosConDescuento, setProductosConDescuento] = useState([])


    // --- Manejo de Cantidades, sumar y restar ---

    const [quantities, setQuantities] = useState([0].map(item => item + 1)); // 1 por defecto por item

    const handleDecrement = (index) => {
        setQuantities(prev => {
            const newQuantity = prev[index] > 1 ? prev[index] - 1 : 1;
            const newQuantities = [...prev];
            newQuantities[index] = newQuantity; // actualizamos la cantidad especifica
            return newQuantities;
        });
    };

    const handleIncrement = (index) => {
        setQuantities(prev => {
            const newQuantities = [...prev];
            newQuantities[index] = newQuantities[index] + 1; // Incrementamos especificamente el item
            return newQuantities;
        });
    };

    ///


    useEffect(() => {

        if (!data) navigate('/register')
        setUser([data.user])


        // Función para hacer la solicitud a la API
        const fetchProductos = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/cart/details`, {
                    credentials: "include" // Esto incluye las cookies
                });
                let res = await response.json()
                setProductos(res.data); // Almacena los productos en el estado
                if (res.status == 200 && res.data.length > 0) {
                    setTaller(res.data[0].nombre_taller); // Asignar el nombre del taller
                } else if (res.status == 404) throw new Error('Usuario no presenta elementos en el carrito')

            } catch (error) {
                console.error('Error al obtener los productos', error);
            }
        };
        fetchProductos();

        const fetchDescuentos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cupon/product/h', {
                    withCredentials: true
                });
                setProductosConDescuento(response.data);
            } catch (error) {
                console.error('Error al obtener productos con descuento', error);
            }
        };
        fetchDescuentos();

    }, [])
    // Función para aplicar el descuento
    const aplicarDescuento = (producto) => {
        const productoConDescuento = productosConDescuento.find(
            (descuento) => descuento.productoInfo._id === producto.carrito._id
        );
        if (productoConDescuento) {
            // Aplicar descuento
            const descuento = productoConDescuento.descuento;
            const precioOriginal = producto.carrito.precio;
            const precioDescuento = precioOriginal - (precioOriginal * descuento) / 100;
            return precioDescuento;
        }
        return producto.carrito.precio; // Si no hay descuento, devolver el precio original
    };
    const subtotal = productos?.reduce((acc, item) => acc + aplicarDescuento(item) * item.carrito.cantidad, 0);
    const shippingCost = 20;
    const total = subtotal + shippingCost;


    const handleOpenDialog = () => {
        setIsDialogOpen(true); // Abre el diálogo
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false); // Cierra el diálogo
    };

    return (
        <main className="pt-[70px] pb-[70px]">
            <Header />

            <div className="upper flex flex-col p-5 gap-2">
                <span className="text-lg font-bold text-[var(--color-9D1A1A)]">Tu carrito de compras</span>
                <small className="text-[var(--color-9D1A1A)] opaprice-50">Revisa aquí los productos que añadiste a tu carrito</small>
            </div>

            <div className="grid grid-cols-1 gap-4 p-3">
                {productos?.map((item, index) => (
                    <div key={index} className="bg-[var(--color-703A31)] rounded-lg overflow-hidden shadow-md h-[150px] justify-around items-center flex">
                        <img src={item.carrito.img} className="w-[130px] h-[130px] object-cover" style={{ borderRadius: '10px' }} />
                        <div className="flex flex-col w-[170px] break-words">
                            <h3 className="text-white text-sm">{item.carrito.nombre}</h3>
                            <p className="text-gray-300 text-sm">COP {aplicarDescuento(item)}</p>
                            <p className="text-gray-300 text-sm">{item.carrito.dimensiones}</p>
                            <p className="text-gray-300 text-sm">{taller}</p>

                            <div className="addsubtract flex text-white justify-around bg-[var(--color-2E1108)] rounded-lg p-1">
                                <button onClick={() => handleDecrement(index)} className="bg-[var(--color-2E1108)] px-2 rounded">-</button>
                                <div>{quantities[index]}</div>
                                <button onClick={() => handleIncrement(index)} className="bg-[var(--color-2E1108)] px-2 rounded">+</button>
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
                <button onClick={handleOpenDialog} className="mt-5 flex items-center justify-center w-[150px] h-[50px] bg-[var(--color-2E1108)] text-white rounded-lg">
                    Realizar Compra
                </button>
                {isDialogOpen && (
                    <PurchaseConfirmation productos={productos} onClose={handleCloseDialog} />
                )}
            </div>

            {/* <div>
                <button onClick={handleOpenDialog}>Realizar compra</button>

                {isDialogOpen && (
                    <PurchaseConfirmation onClose={handleCloseDialog} />
                )}
            </div> */}

            <Footer />
        </main>
    );
}
