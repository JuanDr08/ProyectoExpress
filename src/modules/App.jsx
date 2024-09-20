import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Carga from "./pages/Carga"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Carga/>
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )
}