import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";

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
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const data = useLoaderData()
    const [productos, setProductos] = useState([]);


    useEffect(()=> {

        if (!data) navigate('/register')
        console.log(data.user)
        setUser([data.user])

        // Función para hacer la solicitud a la API
        const fetchProductos = async () => {
            try {
            const response = await axios.get(`http://localhost:3000/cupon/product/h`);
            setProductos(response.data); // Almacena los productos en el estado}
            } catch (error) {
            console.error('Error al obtener los productos', error);
            }
        };
      fetchProductos();

    },[])

    const handleButtonClick = (index, category) => {
        setActiveIndex(index);
        setSelectedCategory(category);
    };

    // Filtrar productos según la categoría seleccionada
    const filteredProductos = selectedCategory
        ? productos.filter(item => item.productoInfo.categoria === selectedCategory)
        : productos;

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
                        onClick={() => handleButtonClick(index, category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4 p-5">
            {filteredProductos.map((item, index) => (
                    <Link to={`/product/${item.productoInfo._id}`}>
                        <div key={index} className="bg-[var(--color-703A31)] rounded-lg overflow-hidden shadow-md flex flex-col">
                            <img
                                src={item.productoInfo.img}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-2">
                                <h3 className="text-white text-sm">{item.productoInfo.nombre}</h3>
                                <p className="text-gray-300">COP {item.productoInfo.precio}</p>
                                <p className="text-gray-300 text-xs">{item.productoInfo.descripcion}</p>
                                <p className="text-gray-300 text-xs">Descuento: {item.descuento}%</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <Footer />
        </main>
    );
}
