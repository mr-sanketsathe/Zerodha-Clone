import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUser } from "./context/UserContext";
import './Orders.css';

const Orders = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    async function getOrders() {
      try {
        const res = await axios.post(
          "http://localhost:3002/OrderList",
          { id: user[2] }, 
          { withCredentials: true }
        );
       
          setOrders(res.data.Orders);
       
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    }
      
     getOrders();
  }, [user]);
  

  return (
    <div className="orders-container">
      <h2 className="orders-heading">Order History</h2>
        { !orders ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <Link to="/" className="btn">Start Trading</Link>
        </div>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Total</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td className={order.mode === "BUY" ? "buy-order" : "sell-orders"}>
                  {order.mode}
                </td>
                <td>₹{order.qty * order.price}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
