import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const wshops = [
    { name: "Arte Abedali Escalante", city: "Cusco", img: "/img/Rectangle 14.png" },
    { name: "Asoc. de artesanos Tinkuy", city: "Huanico", img: "/img/Rectangle 16.png" },
    { name: "Retablos Jesús Urbano", city: "Ayacucho", img: "/img/Rectangle 22.png" },
    { name: "Taller Awaq Ayllus", city: "Ayacucho", img: "/img/Rectangle 23.png" },
    { name: "Taller Sanabria Nuñez", city: "Junín", img: "/img/Rectangle 24.png" },
    { name: "Lastenia Canayo", city: "Ucayali", img: "/img/Rectangle 25.png" }
];

export function CraftWorkshops() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [workshops, setWorkshops] = useState([]);
    const data = useLoaderData();


    useEffect(()=> {

        if (!data) navigate('/register')
        console.log(data.user)
        setUser([data.user])
        fetchWorkshops();
    },[data, navigate])

    const fetchWorkshops = async () => {
        try {
            const response = await axios.get('http://localhost:3000/workshops',{
                withCredentials: true,
            });
            //console.log(response)
            setWorkshops(response.data);
        } catch (error) {
            console.error('Error fetching workshops:', error);
        }
    };

    const handleWorkshopClick = (id) => {
        navigate(`/workshops/related/${id}`); // Redirige a una página con el ID del taller
    };


    return (
        <main>
            <Header />

            <div className="upper flex flex-col p-5 gap-2">
                <span className="text-lg font-bold text-[var(--color-9D1A1A)]">Talleres y tiendas artesanales</span>
                <small className="text-[var(--color-9D1A1A)] opacity-50">Tiendas de artesanías de todas partes de Santander</small>
            </div>

            <div className="grid grid-cols-2 gap-4 p-5">
                {workshops.map((shop) => (
                    <div 
                        key={shop._id} 
                        className="bg-[var(--color-703A31)] rounded-lg overflow-hidden shadow-md h-[190px]"
                        onClick={() => handleWorkshopClick(shop._id)}
                        style={{cursor: "ponter"}}
                    >
                        <div className="p-2">
                            <h3 className="text-white text-sm">{shop.nombre_taller}</h3>
                            <p className="text-gray-300">{shop.lugar.ciudad}</p>
                        </div>
                        <img
                            src={shop.imagen}
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
