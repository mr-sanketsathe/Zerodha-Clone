import axios from 'axios';
import { useState } from 'react';
import { useUser } from "./context/UserContext";
export default function SellStockwindow({stock}) {
    let { user ,setRefresh} = useUser();
    const [qty, setQty] = useState('');
    const [loading,setloading]=useState(true);
    async function sellStock() {
         setloading(prev=>!prev);
        try {
            const SellStockRes = await axios.post(
                "https://zerodhabackend-zyfe.onrender.com/sellStock",
                {   stock:stock.name,
                    qty: qty,
                    userId: user[2]
                },
                { withCredentials: true }
            );
            if(SellStockRes){
                alert(SellStockRes.data.message);
                setloading(prev=>!prev);
                setRefresh(prev=>!prev);
            }
          
        }catch(err){
          console.error(err);
        }

     }
    return (
        <div className="buy-stock-container">
            <h2 className='buy-stock-heading'>sell Stock</h2>
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
            </div>
            <button className={`${!loading?"buy-stock-btn-clk":"buy-stock-btn"}`}onClick={sellStock}>Sell</button>
        </div>
    )
}