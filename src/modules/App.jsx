import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// import {Pantalla6} from "./pages/pantalla6";
// import Pantalla7 from "./pages/pantalla7";
// import Pantalla17 from "./pages/pantalla17";
import { Pantalla19 } from "./pages/pantalla19";
import Carga from "./pages/Carga";
import InicioSesion from "./pages/InicioSesion";
import Entrada from "./pages/Entrada";
import { Home } from "./pages/Home";
import { CraftWorkshops } from "./pages/Craft_Workshops";
import { DiscountsPromotions } from "./pages/Discounts_Promotions";
import { ShoppingCart } from "./pages/Shopping_Cart";
import { Profile } from "./pages/Profile";
import { EmailRecord } from "./pages/EmailRecord";
//import { Pantalla6 } from "./pages/pantalla6"; -- VISTA CORRUPTA, LA IMPORTACION DE ESTA VISTA EMPIEZA A DAÑAR OTRAS DISTINTAS, DEBE REVISAR ESOS CSS QUE ESTAN DAÑANDO LA PAGINA
import { TermsAndConditions } from "./pages/Terms&Conditions";
import { Categories } from "./pages/Categories";
import { WorkshopPreview } from "./pages/WorkshopPreview";
//import { Pantalla20 } from "./pages/pantalla20";
//import { Pantalla21 } from "./pages/pantalla21";
import { Settings } from "./pages/Settings";
import { AppOpinions } from "./pages/AppOpinions";
import { CustomerSupport } from "./pages/CustomerSupport";
import { Chat } from "./pages/ChatView";
import InfoCraft from "./pages/InfoCraft";
import TallerCeramica from "./pages/CraftInscription";
import InicioSesionRuraq from "./pages/InicioSesionRuraq";
//import Pantalla17 from "./pages/pantalla17";// -- VISTA CORRUPTA, LA IMPORTACION DE LA VISTA Y SU CSS CORROMPE EL ESTILO DE LAS DEMAS VISTAS, REVISAR
// import { Pantalla20 } from "./pages/pantalla20";
// import { Pantalla21 } from "./pages/pantalla21";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Carga/>,
    },
    {
        path: "/register",
        element: <Entrada/>,
    },
    {
        path: '/register/email',
        element: <EmailRecord/>
    },
    // { -- VISTA CORRUPTA, EL CSS DE LA VISTA DAÑA ALGUNAS MAS COMO LA DE /REGISTER/EMAIL
    //     path: '/register/phone',
    //     element: <Pantalla6/>
    // },
    {
        path: '/register/TermsAndConditions',
        element: <TermsAndConditions/>
    },
    {
        path: '/login',
        element: <InicioSesion/>
    },
    {
        path: '/login/credentials',
        element: <InicioSesionRuraq/>
    },
    {
        path: '/home',
        element: <Home/>,
    },
    {
        path: '/workshops',
        element: <CraftWorkshops/>,
    },
    {
        path: '/discounts',
        element: <DiscountsPromotions/>,
    },
    {
        path: '/cart',
        element: <ShoppingCart/>,
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/products',
        element: <Categories/>
    },
    {
        path: '/workshop/related/:id',
        element: <WorkshopPreview/>,
    },
    // { -- VISTA CORRUPTA, PRESENTA INCONGRUENCIAS, REVISAR LOS ESTILOS YA QUE GENERAN ERRORES
    //     path: '/product/:id',
    //     element: <Pantalla17/>,
    // }
    // {
    //     path: '/crafts/favorites',
    //     element: <Pantalla19/>,
    // },
    // {
    //     path: '/purchases/success',
    //     element: <Pantalla20/>,
    // },
    // { // PRESENTA ERRORES POR EL CSS
    //     path: '/workshops/educational',
    //     element: <Pantalla21/>,
    // }
    {
        path: '/settings',
        element: <Settings/>
    },
    {
        path: '/opinions',
        element: <AppOpinions/>
    },
    {
        path: '/faq',
        element: <CustomerSupport/>
    },
    {
        path: '/chat/:name',
        element: <Chat/>
    },
    {
        path: '/workshop/info/:id',
        element: <InfoCraft/>
    },
    {
        path: '/workshop/details/:id',
        element: <TallerCeramica/>
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
};
