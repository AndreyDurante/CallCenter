// src/main.jsx
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import App from "./App.jsx"
import ConsultarPage from "./pages/ConsultarPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/consultar",
    Component: ConsultarPage,
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
