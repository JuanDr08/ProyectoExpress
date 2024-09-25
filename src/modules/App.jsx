import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Categories } from "./pages/Categories";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Categories/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}