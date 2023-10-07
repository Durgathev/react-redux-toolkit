
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Rootlayout from "./components/Rootlayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/cart', element: <Cart /> },
    ],
  }
]);


function App() {

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
