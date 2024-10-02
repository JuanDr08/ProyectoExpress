import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


import {Pantalla7} from "./pages/pantalla7";
import Pantalla17 from "./pages/pantalla17";
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
import { Pantalla6 } from "./pages/pantalla6"; 
import { TermsAndConditions } from "./pages/Terms&Conditions";
import { Categories } from "./pages/Categories";
import { WorkshopPreview } from "./pages/WorkshopPreview";
import { Pantalla20 } from "./pages/pantalla20";
import { Pantalla21 } from "./pages/pantalla21";
import { Pantalla22 } from "./pages/pantalla22";
import { Settings } from "./pages/Settings";
import { AppOpinions } from "./pages/AppOpinions";
import { CustomerSupport } from "./pages/CustomerSupport";
import { Chat } from "./pages/ChatView";
import InfoCraft from "./pages/InfoCraft";
import TallerCeramica from "./pages/CraftInscription";
import InicioSesionRuraq from "./pages/InicioSesionRuraq";


async function loader() {

    let res = await fetch('http://localhost:3000/auth/check', {
        method: 'GET',
        credentials: 'include'
    })
    let data = await res.json()
    if (res.ok) {
        if (!data.authenticated) return false
        return data
    } else {
        return false
    }

}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Pantalla6/>,
    },
    {
        path: "/register",
        element: <Entrada/>,
    },
    {
        path: '/register/email',
        element: <EmailRecord/>
    },
    {
        path: '/register/phone',
        element: <Pantalla6/>
    },
    {
        path: '/register/TermsAndConditions',
        element: <Pantalla7/>
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
        loader: loader
    },
    {
        path: '/workshops',
        element: <CraftWorkshops/>,
        loader: loader
    },
    {
        path: '/discounts',
        element: <DiscountsPromotions/>,
        loader: loader
    },
    {
        path: '/cart',
        element: <ShoppingCart/>,
        loader: loader
    },
    {
        path: '/profile',
        element: <Profile/>,
        loader: loader
    },
    {
        path: '/products',
        element: <Categories/>,
        loader: loader
    },
    {
        path: '/workshop/related/:id',
        element: <WorkshopPreview/>,
        loader: loader
    },
    {
        path: '/product/:id',
        element: <Pantalla17/>,
       loader: loader
    },
    {
        path: '/crafts/favorites',
        element: <Pantalla19/>,
       loader: loader
    },
    {
        path: '/purchases/success',
        element: <Pantalla20/>,
        loader: loader
    },
    {
        path: '/workshops/educational',
        element: <Pantalla21/>,
        loader: loader
    },
    {
        path: '/coupon',
        element: <Pantalla22/>,
        loader: loader
    },
    {
        path: '/settings',
        element: <Settings/>,
        loader: loader
    },
    {
        path: '/opinions',
        element: <AppOpinions/>,
        loader: loader
    },
    {
        path: '/faq',
        element: <CustomerSupport/>,
        loader: loader
    },
    {
        path: '/chat/:name',
        element: <Chat/>,
        loader: loader
    },
    {
        path: '/workshop/info/:id',
        element: <InfoCraft/>,
        loader: loader
    },
    {
        path: '/workshop/details/:id',
        element: <TallerCeramica/>,
        loader: loader
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
};
