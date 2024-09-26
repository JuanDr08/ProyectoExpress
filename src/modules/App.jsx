import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { CustomerSupport } from "./pages/CustomerSupport";
const router = createBrowserRouter([
    {
        path: "/",
        element: <CustomerSupport/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}