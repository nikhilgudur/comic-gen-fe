import { createBrowserRouter } from "react-router";
import Home from "../page/Home/Home";
import Chat from "../page/Chat/Chat";
import ComicGenerator from "../components/ComicGenerator/ComicGenerator";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "c/:id",
    element: <Chat />,
  },
  {
    path: "chat",
    element: <ComicGenerator />
  }
];

const router = createBrowserRouter(routes);

export default router;
