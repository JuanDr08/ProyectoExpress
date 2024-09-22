import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Carga from "./pages/Carga";
import Entrada from "./pages/Entrada";
import InicioSesion from "./pages/InicioSesion";
import InicioSesionRuraq from "./pages/InicioSesionRuraq";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Carga />,
    },
    {
        path: "/Entrada",
        element: <Entrada />,
    },
    {
        path: "/Sesion",
        element: <InicioSesion/>
    },
    {
        path:"/SesionRuraq",
        element: <InicioSesionRuraq/>
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
};
