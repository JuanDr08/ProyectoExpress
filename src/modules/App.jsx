import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { AppOpinions } from "./pages/AppOpinions";
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppOpinions/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}