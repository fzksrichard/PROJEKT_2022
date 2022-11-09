import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { clearCart } from "../redux/cartRedux";
import { userRequest } from "../requestMethods";

const Success = (e) => {
  const location = useLocation();
  const data = location.state.stripeData;
  console.log(data)
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    navigate("/");
  };

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        console.log(res.data);
        setOrderId(res.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div>
    <Navbar/>
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `A megrendelésed sikeresen rögzítve. A rendelésed azonosítója: ${orderId}`
        : `Successfull. Your order is being prepared...`}

      <button onClick={handleDelete} style={{ padding: 10, marginTop: 20 }}>
        Ugrás a főoldalra
      </button>
    </div>
    <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Success;