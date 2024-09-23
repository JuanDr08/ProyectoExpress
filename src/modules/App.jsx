import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Pantalla6} from "./pages/pantalla6";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Pantalla6/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}