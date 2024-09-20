import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Carga from "./pages/Carga";
import Entrada from "./pages/Entrada";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Carga />,
    },
    {
        path: "/Entrada",
        element: <Entrada />,
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
};
