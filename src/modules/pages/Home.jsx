import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"



export const Home = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const data = useLoaderData()


    useEffect(()=> {

        if (!data) navigate('/')
            console.log(data.user)
        setUser([data.user])

    },[])

    return (

        <>
        
            <div>
                <h1>Bienvenido {user && user.names }</h1>
                <button onClick={() => window.open('http://localhost:3000/logout', '_self')}>Cerrar sesión</button>
            </div>

        </>

    )

}