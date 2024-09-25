import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// import {Pantalla6} from "./pages/pantalla6";
// import Pantalla7 from "./pages/pantalla7";
// import Pantalla17 from "./pages/pantalla17";
import { Pantalla19 } from "./pages/pantalla19";
// import { Pantalla20 } from "./pages/pantalla20";
// import { Pantalla21 } from "./pages/pantalla21";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Pantalla19/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}