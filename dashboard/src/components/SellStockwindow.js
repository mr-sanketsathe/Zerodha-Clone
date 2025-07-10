import axios from 'axios';
import { useState } from 'react';
import { useUser } from "./context/UserContext";

export default function SellStockwindow({ stock }) {
    const { user, setRefresh } = useUser();
    const [qty, setQty] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const validate = () => {
        const qtyNum = parseInt(qty, 10);
        if (!qty || isNaN(qtyNum) || qtyNum < 1) {
            setError("Please enter a valid quantity (minimum 1).");
            return false;
        }
        setError('');
        return true;
    };

    async function sellStock() {
        if (!validate()) return;

        setLoading(true);
        try {
            const SellStockRes = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/sellStock`,
                {
                    stock: stock.name,
                    qty: qty,
                    userId: user[2],
                },
                { withCredentials: true }
            );

            if (SellStockRes) {
                alert(SellStockRes.data.message);
                setQty('');
                setRefresh(prev => !prev);
            }
        } catch (err) {
            console.error(err);
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="buy-stock-container">
            <h2 className="buy-stock-heading">Sell Stock</h2>

            <div className="form-group">
                <label>Quantity:</label>
                <input
                    type="number"
                    min={1}
                    required
                    value={qty}
                    placeholder="Enter quantity"
                    onChange={(e) => setQty(e.target.value)}
                />
                {error && <div className="error">{error}</div>}
            </div>

            <button
                className={`${loading ? "buy-stock-btn-clk" : "buy-stock-btn"}`}
                onClick={sellStock}
                disabled={loading}
            >
                {loading ? "Processing..." : "Sell"}
            </button>
        </div>
    );
}
