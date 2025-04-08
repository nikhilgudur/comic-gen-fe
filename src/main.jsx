import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <div style={{ marginLeft: "20px", marginRight: "20px", width: "100vw" }}>
      <RouterProvider router={router} />
    </div>
=======
    <RouterProvider router={router} />
>>>>>>> refs/remotes/origin/main
  </StrictMode>
);
