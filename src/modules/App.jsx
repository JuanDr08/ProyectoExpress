import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { CraftWorkshops } from "./pages/Craft_Workshops";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CraftWorkshops/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}