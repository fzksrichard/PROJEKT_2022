import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux"
import { useEffect } from "react";

const App = () => {
  useEffect(() => { document.title = "Projekt 2022" }, []);
  //const user = useSelector(state => state.user.currentUser); //BALÁZSNAK: belépve marad napokig
  const user= null;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
};

export default App;