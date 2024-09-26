import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Settings } from "./pages/Settings";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Settings/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}