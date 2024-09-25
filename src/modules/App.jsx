import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { WorkshopPreview } from "./pages/WorkshopPreview";
const router = createBrowserRouter([
    {
        path: "/",
        element: <WorkshopPreview/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}