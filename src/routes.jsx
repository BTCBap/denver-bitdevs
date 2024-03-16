import App from "./routes/root.jsx";
import ErrorPage from "./routes/error-page.jsx";
import About from "./routes/about.jsx";
import Home from "./routes/home.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
