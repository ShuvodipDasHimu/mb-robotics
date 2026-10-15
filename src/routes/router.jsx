import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Resources from "../pages/Resources/Resources";
import IconicPage from "../pages/IconicPage/IconicPage";
import RobotStory from "../pages/RobotStory/RobotStory";

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
      {
        path: "iconic-robots",
        Component: IconicPage,
      },
      {
        path: "robot-story/:id",
        Component: RobotStory,
      },
    ],
  },
]);

export default router;