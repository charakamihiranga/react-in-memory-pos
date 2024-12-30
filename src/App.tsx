import './styles/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RouteLayout} from "./components/RouteLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Customer} from "./pages/Customer.tsx";
import {Item} from "./pages/Item.tsx";
import {Orders} from "./pages/Orders.tsx";
import {Error} from "./components/Error.tsx";

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
        element: <RouteLayout />,
        children: [
          {path: '/', element: <Dashboard />},
          {path: '/customer', element: <Customer />},
          {path: '/item', element: <Item />},
          {path: '/orders', element: <Orders />},
        ]
    },
    {path: '*', element: <Error />}
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App;
