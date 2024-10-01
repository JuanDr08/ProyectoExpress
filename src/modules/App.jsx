import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from './pages/Home.jsx'
import { Chat } from "./pages/ChatView.jsx";

async function loader() {

    let res = await fetch('http://localhost:3000/auth/check', {
        method: 'GET',
        credentials: 'include'
    })
    let data = await res.json()
    if (res.ok) {
        if (!data.authenticated) return false
        return data
    } else {
        return false
    }

}

const router = createBrowserRouter([
    {
        path: "/",
        element: <button onClick={() => window.open('http://localhost:3000/login/auth/google', '_self')}>log with google</button>,
        loader: loader
    },
    {
        path: '/home',
        element: <Home />,
        loader: loader
    },
    {
        path: '/chat',
        element: <Chat nombre='Taller augus'/>,
        loader: loader
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}