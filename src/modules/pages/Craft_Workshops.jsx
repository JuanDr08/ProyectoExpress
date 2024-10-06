import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const fetchWorkshopsLoader = async () => {

    try {
        const response = await axios.get('http://localhost:3000/workshops', {
            headers: {
                'Cache-Control': 'max-age=3600',
                'Expires': new Date(Date.now() + 3600 * 1000).toUTCString()
            },
            withCredentials: true
        });
        //console.log(response)
        return response.data
    } catch (error) {
        console.error('Error fetching workshops:', error);
        return 404
    }

}

export default function CraftWorkshops() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const data = useLoaderData();
    const [workshops, setWorkshops] = useState(data.data);
    console.log(data)


    useEffect(() => {

        if (!data) navigate('/register')
        setUser(data.user[0])
        //        fetchWorkshops();
    }, [data, navigate])

    const fetchWorkshops = async () => {
        /* try {
            const response = await axios.get('http://localhost:3000/workshops',{
                withCredentials: true,
                cache: "force-cache"
            });
            //console.log(response)
            setWorkshops(response.data);
        } catch (error) {
            console.error('Error fetching workshops:', error);
        } */
    };

    const handleWorkshopClick = (id) => {
        navigate(`/workshops/related/${id}`); // Redirige a una página con el ID del taller
    };


    return (
        <main>
            <Header nick={user?.nick} photo={user?.photo} />

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
                        style={{ cursor: "ponter" }}
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
