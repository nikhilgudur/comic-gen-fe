import { createBrowserRouter } from "react-router";
import Home from "../page/Home/Home";
import Chat from "../page/Chat/Chat";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "c/:id",
    element: <Chat />,
  },
];

const router = createBrowserRouter(routes);

export default router;
