import React, { useState } from 'react';
// import './BuyStockWindow.css';
import axios from 'axios';
import { useUser } from "./context/UserContext";
import { useNavigate } from 'react-router-dom';
export default function BuyStockWindow({ stock ,handleBuy }) {
   const Navigate=useNavigate();
    let { user,setRefresh } = useUser();
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');
    const [loading,setloading]=useState(true);
    async function BuyStock() {
         setloading(prev=>!prev);
        try {
            const stockRes = await axios.post(
                "http://localhost:3002/buyStock",
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
                setRefresh(prev=>!prev);
                setloading(prev=>!prev);
                setTimeout(() => {
                    Navigate("/orders");
                }, 1000);
            }
        } catch (err) {
           console.error(err);
        }
    }


    return (
        <div className="buy-stock-container">
            <h2 className='buy-stock-heading'>Buy Stock</h2>
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
            <button className={`${!loading?"buy-stock-btn-clk":"buy-stock-btn"}`} onClick={BuyStock}>Buy</button>
        </div>
    );
};


