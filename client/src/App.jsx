import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Reference from "./pages/Reference";
import Design from "./pages/Design";
import AboutUs from "./pages/AboutUs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux"
import { useEffect } from "react";
import Policy from "./pages/Policy";


const App = () => {
  useEffect(() => { document.title = "Projekt 2022" }, []);
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/design" element={<Design />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
};

export default App;