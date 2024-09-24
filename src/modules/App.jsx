import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {
    Categories
} from '../modules/pages/Categories'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Categories />,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}