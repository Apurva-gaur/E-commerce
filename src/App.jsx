import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import FilterP from "./Components/FilterP.jsx";
import ProductCard from "./Components/ProductCard.jsx";
import ProductDetail from "./Components/ProductDetail.jsx";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import Layout from "./Components/Layout.jsx";
import Cart from "./Components/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<ProductCard />} />
      <Route path='/productDetail/:id' element={<ProductDetail />}></Route>
      <Route path='/cart' element={<Cart />}></Route>


    </Route>
  )
)

function App() {


  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>

    </>

  );
}

export default App;

