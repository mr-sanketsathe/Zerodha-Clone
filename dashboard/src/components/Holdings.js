import axios from 'axios';
import { useState,useEffect } from 'react';
import VerticalBar from './VerticalBar';
export default function Holdings() {
    const[holdings,setholdings]=useState([]);
    useEffect(()=>{
        async function getHoldings() {
         let res=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Holdings`);
         console.log(res);
         setholdings(res.data)
        }
         getHoldings();
    },[])
        const labels =holdings.map((subArray)=>subArray['name']);
         const data = {
          labels,
          datasets: [
            {
              label: 'Last Traded Price',
              data: holdings.map((stock) =>stock.price),
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        };





    return (
        <>
            <h3 className="title">Holdings ({holdings.length})</h3>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>


                    <tbody>

                        {holdings.map((stock, index) => {
                            const curValue = stock.price * stock.qty;
                            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = stock.isLoss ? "loss" : "profit";

                            return (

                                <tr key={index}>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)}</td>
                                    <td>{curValue.toFixed(2)}</td>
                                    <td className={profClass}>
                                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                                    </td>
                                    <td className={profClass}>{stock.net}</td>
                                    <td className={dayClass}>{stock.day}</td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="row">
                <div className="col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className="col">
                    <h5>1,553.40 (+5.20%)</h5>
                    <p>P&L</p>
                </div>
            </div>
            <VerticalBar data={data}/>
        </>
    );
};

