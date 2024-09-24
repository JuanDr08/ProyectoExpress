import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Chat } from "./pages/ChatView";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Chat nombre='Taller Awaq Ayllus'/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}