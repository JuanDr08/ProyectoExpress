import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function CraftWorkshops() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const data = useLoaderData()
    const [wshops, setWshops] = useState([]); 

    useEffect(()=> {

        if (!data) navigate('/register')
        setUser([data.user])

        // Función para hacer la solicitud a la API
        const fetchProductos = async () => {
            try {
            const response = await axios.get(`http://localhost:3000/product/`, {withCredentials: true});
            const workshopsData = response.data.map(item => ({
                id: item._id,
                name: item.nombre, // Usar el nombre del producto
                city: item.nombre_taller, // Usar el nombre del taller como ciudad
                img: item.img // Usar la imagen del producto
            }));
            setWshops(workshopsData);
            } catch (error) {
            console.error('Error al obtener los productos', error);
            }
        };
        fetchProductos();

    },[])


    return (
        <main>
            <Header />

            <div className="upper flex flex-col p-5 gap-2">
                <span className="text-lg font-bold text-[var(--color-9D1A1A)]">Talleres y tiendas artesanales</span>
                <small className="text-[var(--color-9D1A1A)] opacity-50">Tiendas de artesanías de todas partes de Santander</small>
            </div>

            <div className="grid grid-cols-2 gap-4 p-5">
            {filteredData.map((shop, index) => (
                    <Link to={`/product/${shop.id}`}>
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
                    </Link>
                ))}
            </div>

            <Footer />
        </main>
    );
}
