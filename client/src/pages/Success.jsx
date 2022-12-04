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
  const totalcost=location.state.totalordercost
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
        const res = await userRequest.post("/sitedesigns", {
          userId: currentUser._id,
          designs: cart.products.map((item) => ({
            title: item.title,
            deadline: item.deadline,
            type: item.type,
            color: item.color,
            menuitems: item.menuitems,
            menuitemsArray: item.menuitemsArray,
            desc: item.desc,
            target: item.target,
            responsive: item.responsive,
            logo: item.logo,  
          })),
          amount: totalcost,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    data && createOrder();
  }, [cart, data, totalcost, currentUser]);

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
        background: "radial-gradient(circle, rgba(63,212,251,0.45451684091605393) 0%, rgba(234,70,252,0.17440479609812676) 100%)"
      }}
    >
      {orderId
        ? `A megrendelésed sikeresen rögzítve. A rendelésed azonosítója: ${orderId}`
        : `Successfull. Your order is being prepared...`}
        <div>
        {orderId && "Csapatunk hamarosan felveszi Önnel a kapcsolatot..."}</div>
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