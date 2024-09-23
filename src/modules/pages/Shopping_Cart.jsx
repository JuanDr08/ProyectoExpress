import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
const wshops = [
    { name: "Chalina Beige con flecos", city: "Cusco", img: "/img/Rectangle 14.png" },
    { name: "Caminos de mesa", city: "Huanico", img: "/img/Rectangle 16.png" },
    { name: "Dueño de la malva", city: "Ayacucho", img: "/img/Rectangle 22.png" },
    { name: "Chullo II", city: "Ayacucho", img: "/img/Rectangle 23.png" },
    { name: "Taller Sanabria Nuñez", city: "Junín", img: "/img/Rectangle 24.png" },
    { name: "Lastenia Canayo", city: "Ucayali", img: "/img/Rectangle 25.png" }
];

const categories = [
    "Textilería",
    "Cerámica",
    "Orfebrería",
    "Talla en piedra",
    "Talla en madera",
    "Bordado",
    "Joyería",
    "Hojalatería",
    "Estampado",
    "Pintura tradicional",
];

export function DiscountsPromotions() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <main>
            <Header />

            <div className="upper flex flex-col p-5 gap-2">
                <span className="text-lg font-bold text-[var(--color-9D1A1A)]">Tu carrito de compras</span>
                <small className="text-[var(--color-9D1A1A)] opacity-50">Revisa aquí los productos que añadiste a tu carrito</small>
            </div>

            <div className="grid grid-cols-2 gap-4 p-5">
                {wshops.map((shop, index) => (
                    <div key={index} className="bg-[var(--color-703A31)] rounded-lg overflow-hidden shadow-md h-[190px]">
                        <div className="p-2">
                            <h3 className="text-white text-sm">{shop.name}</h3>
                            <p className="text-gray-300">{shop.city}</p>
                        </div>
                        <img
                            src={shop.img}
                            className="w-full h-40 object-cover"
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
