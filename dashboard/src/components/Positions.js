import { useState,useEffect } from 'react';
import axios from "axios";
export default function Positions(){
   const [positions,setPositions]=useState([]);
   useEffect(()=>{
      async function GetPositions() {
        try{
          let res=await axios.get('https://zerodhabackend-zyfe.onrender.com/Positions');
          setPositions(res.data);
        }catch(err){
          console.log(err);
        } 
      }
      GetPositions();
   },[])
    return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

     <div className="order-table">
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Instrument</th>
        <th>Qty.</th>
        <th>Avg.</th>
        <th>LTP</th>
        <th>P&amp;L</th>
        <th>Chg.</th>
      </tr>
    </thead>
    <tbody>
      {positions.map((stock, index) => {
        const curValue = stock.price * stock.qty;
        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
        const profClass = isProfit ? "profit" : "loss";
        const dayClass = stock.isLoss ? "loss" : "profit";

        return (
          <tr key={index}>
            <td>{stock.product}</td>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td className={profClass}>
              {(curValue - stock.avg * stock.qty).toFixed(2)}
            </td>
            <td className={dayClass}>{stock.day}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
</>
)}