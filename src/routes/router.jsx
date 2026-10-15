import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Resources from "../pages/Resources/Resources";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "resources",
        Component: Resources,
      },
    ],
  },
]);

export default router;