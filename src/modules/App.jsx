import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Carga from "./pages/Carga";
import Entrada from "./pages/Entrada";
import InicioSesion from "./pages/InicioSesion";
import InicioSesionRuraq from "./pages/InicioSesionRuraq";
import InfoCraft from "./pages/InfoCraft";
import TallerCeramica from "./pages/CraftInscription";
import Purchase from "./pages/Purchase";


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
    },
    {
        path:"/InfoCraft",
        element: <InfoCraft/>
    },
    {
        path:"/TallerCeramica",
        element: <TallerCeramica/>
    },
    {
        path:"/Compra",
        element: <Purchase/>
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
};
