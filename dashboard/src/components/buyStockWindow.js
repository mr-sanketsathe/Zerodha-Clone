import React, { useState } from 'react';
import './BuyStockWindow.css';
import axios from 'axios';
import { useUser } from "./context/UserContext";
import { useNavigate } from 'react-router-dom';
export default function BuyStockWindow({ stock }) {
   const Navigate=useNavigate();
    let { user } = useUser();
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');
    async function BuyStock() {
        try {
            const stockRes = await axios.post(
                "http://localhost:3002/order",
                {
                    name: stock.name,
                    price: price,
                    qty: qty,
                    mode: "buy",
                    userId: user[2],

                },
                { withCredentials: true }
            );
            if (stockRes.status === 200) {
                setTimeout(() => {
                    Navigate("/orders");
                }, 1000);
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="buy-stock-container">
            <h2>Buy Stock</h2>
            <div className="form-group">
                <label>Quantity:</label>
                <input
                    type="number"
                    min="1"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    placeholder="Enter quantity"
                />
            </div>
            <div className="form-group">
                <label>Price:</label>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price"
                />
            </div>
            <button onClick={BuyStock}>Buy</button>
        </div>
    );
};


