import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css";
import {format} from "timeago.js"

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("sitedesigns/?new=true");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);


  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Legutóbbi rendelések</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
        <th className="widgetLgTh">Rendelés ID</th>
          <th className="widgetLgTh">Vásárló ID</th>
          <th className="widgetLgTh">Dátum</th>
          <th className="widgetLgTh">Végösszeg</th>
          <th className="widgetLgTh">Állapot</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgName">{order._id}</td>
            <td className="widgetLgName">{order.userId}</td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">{order.amount} Ft</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
