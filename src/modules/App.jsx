import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { CraftWorkshops } from "./pages/Craft_Workshops";
import { DiscountsPromotions } from "./pages/Discounts_Promotions";
import { ShoppingCart } from "./pages/Shopping_Cart";
import { Profile } from "./pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Profile/>,
    }
]);

export const App = () => {

    return (
        <RouterProvider router={router} />
    )

}