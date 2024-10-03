import { useLoaderData, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";

const items = [
    { name: "Vasija pequeña con diseño de flor", price: "COP 1000", stats: "13x10 cm, 2KG", desc:"Asoc. de artesanos productores de Chazuta", img: "/img/Rectangle 44.png" },
    { name: "Bolso negro con diseño de flores", price: "COP 1.000", stats: "13x10 cm, 2KG", desc:"Asoc. Pequeña Roma", img: "/img/Rectangle 45.png" }
]

export function ShoppingCart() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const data = useLoaderData()
    
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    useEffect(()=> {
        
        if (!data) navigate('/register')
        console.log(data.user)
        setUser([data.user])
        
    },[])

    const handleOpenDialog = () => {
        setIsDialogOpen(true); // Abre el diálogo
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false); // Cierra el diálogo
    };

    return (
        <main>
            <Header />

            <div className="upper flex flex-col p-5 gap-2">
                <span className="text-lg font-bold text-[var(--color-9D1A1A)]">Tu carrito de compras</span>
                <small className="text-[var(--color-9D1A1A)] opaprice-50">Revisa aquí los productos que añadiste a tu carrito</small>
            </div>

            <div className="grid grid-cols-1 gap-4 p-3">
                {items.map((shop, index) => (
                    <div key={index} className="bg-[var(--color-703A31)] rounded-lg overflow-hidden shadow-md h-[150px] justify-around items-center flex">
                        <img src={shop.img} className="w-full h-[130px] w-[130px] object-cover" style={{ borderRadius: '10px' }} />
                        <div className="flex flex-col">
                            <h3 className="text-white text-sm">{shop.name}</h3>
                            <p className="text-gray-300 text-sm">{shop.price}</p>
                            <p className="text-gray-300 text-sm">{shop.stats}</p>
                            <p className="text-gray-300 text-sm">{shop.desc}</p>

                            <div className="addsubstract flex text-white justify-around bg-[var(--color-2E1108)] rounded-lg">
                                <button>-</button>
                                <div>1</div>
                                <button>+</button>
                            </div>

                        </div>

                        
                    </div>
                ))}
            </div>

            <div className="coupon flex justify-center items-center">
                <div className="bg-[var(--color-703A31)] w-[90%] h-10 flex items-center justify-center rounded-lg text-white">
                Añadir cupón de descuento

                </div>
            </div>

            <div className="subt mt-5 flex justify-center">
                <div className="bg-[var(--color-703A31)] shadow-lg rounded-lg p-4 w-[90%]">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-white">Subtotal</p>
                            <p className="text-white opacity-50">Gastos de envío</p>
                        </div>
                        <div>
                            <p className="text-white">COP 1000</p>
                            <p className="text-white opacity-50">COP 50</p>
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
                            <p className="text-white">COP 1050</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="mt-5 flex items-center justify-center w-[150px] h-[50px] bg-[var(--color-2E1108)] text-white rounded-lg">
                    Realizar Compra
                </button>
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
