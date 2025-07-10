import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from "./context/UserContext";
import { useNavigate } from 'react-router-dom';

export default function BuyStockWindow({ stock, handleBuy }) {
    const navigate = useNavigate();
    const { user, setRefresh } = useUser();
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        const qtyNum = parseInt(qty, 10);
        const priceNum = parseFloat(price);

        if (!qty || isNaN(qtyNum) || qtyNum < 1) {
            newErrors.qty = 'Quantity must be at least 1.';
        }

        if (!price || isNaN(priceNum) || priceNum < 0.01) {
            newErrors.price = 'Price must be at least 0.01.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    async function BuyStock() {
        if (!validate()) return;
        setLoading(true);
        try {
            const  buyRes = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/buyStock`,
                {
                    name: stock.name,
                    price: price,
                    qty: qty,
                    mode: "buy",
                    userId: user[2],
                },
                { withCredentials: true }
            );
            if (buyRes.status === 201) {
                console.log(buyRes);
                alert(buyRes.data.message);
                setRefresh(prev => !prev);
                setTimeout(() => {
                    navigate("/orders");
                }, 1000);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="buy-stock-container">
            <h2 className="buy-stock-heading">Buy Stock</h2>

            <div className="form-group">
                <label>Quantity:</label>
                <input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    placeholder="Enter quantity"
                    required
                />
                {errors.qty && <div className="error">{errors.qty}</div>}
            </div>

            <div className="form-group">
                <label>Price:</label>
                <input
                    type="number"
                    min={0.01}
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price"
                    required
                />
                {errors.price && <div className="error">{errors.price}</div>}
            </div>

            <button
                className={loading ? "buy-stock-btn-clk" : "buy-stock-btn"}
                onClick={BuyStock}
                disabled={loading}
            >
                {loading ? "Processing..." : "Buy"}
            </button>
        </div>
    );
}
