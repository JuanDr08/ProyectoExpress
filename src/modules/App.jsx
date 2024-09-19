import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}