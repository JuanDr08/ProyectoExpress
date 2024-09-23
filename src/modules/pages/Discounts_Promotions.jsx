import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";

const articles = [
    { name: "Chalina Beige con flecos", price: "COP 50.000", description: "Una hermosa chalina con flecos.", img: "/img/Rectangle 41.png" },
    { name: "Caminos de mesa", price: "COP 50.000", description: "Elegantes caminos de mesa para decorar.", img: "/img/Rectangle 42.png" },
    { name: "Dueño de la malva", price: "COP 50.000", description: "Artículos de malva hechos a mano.", img: "/img/Rectangle 47.png" },
    { name: "Chullo II", price: "COP 50.000", description: "Chullo de lana, ideal para el frío.", img: "/img/Rectangle 48.png" },
    { name: "Taller Sanabria Nuñez", price: "COP 50.000", description: "Artesanías del Taller Sanabria.", img: "/img/Rectangle 49.png" },
    { name: "Lastenia Canayo", price: "COP 50.000", description: "Artesanías de Lastenia Canayo.", img: "/img/Rectangle 50.png" }
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
                <span className="text-lg font-bold text-[var(--color-9D1A1A)]">Descuentos y promociones</span>
                <small className="text-[var(--color-9D1A1A)] opacity-50">En cientos de artesanías</small>
            </div>

            <div className="overflow-x-auto flex h-10">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 text-white bg-[var(--color-703A31)] ${
                            activeIndex === index ? 'hover:bg-[var(--color-2E1108)]' : ''
                        } transition duration-200`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4 p-5">
                {articles.map((shop, index) => (
                    <div key={index} className="bg-[var(--color-703A31)] rounded-lg overflow-hidden shadow-md flex flex-col">
                        <img
                            src={shop.img}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-2">
                            <h3 className="text-white text-sm">{shop.name}</h3>
                            <p className="text-gray-300">{shop.price}</p>
                            <p className="text-gray-300 text-xs">{shop.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
