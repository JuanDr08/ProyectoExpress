import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Pantalla6} from "./pages/pantalla6";
import Pantalla7 from "./pages/pantalla7";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Pantalla7/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}