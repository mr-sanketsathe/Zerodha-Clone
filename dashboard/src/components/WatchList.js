import React, { useState} from "react";
import { watchlist } from "../Data/data";
import{KeyboardArrowDown, KeyboardArrowUp}  from '@mui/icons-material';
import DoughnutBar  from "./DoughnutBar";
import StockActions from "./StockActions";
import BuyStockWindow from "./buyStockWindow";

export default function WatchList() {
    const data = {
      labels: watchlist.map((subArray)=>subArray['name']),
      datasets: [
        {
          label: 'stocks price',
          data:watchlist.map((stock)=>stock.price),
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)',
            'rgba(255, 159, 64, 0.3)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return(
             <WatchListItem stock={stock} key={index}/>
          )
        })}
      </ul>
        <DoughnutBar data={data}/>
    
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions stock={stock} />}
    </li>
  );
};

const WatchListActions = ({ stock}) => {
 let[buyWindow,setbuyWindow]=useState(false);
  let[sellWindow,setsellWindow]=useState(false);
    function handleBuy(){
       setbuyWindow(!buyWindow);
    }
    function handleSell(){
      console.log('stok sell successfully')
      setsellWindow(!sellWindow);
    }
    
  return (
    <>
     <StockActions handleBuy={handleBuy} handleSell={handleSell} />
    {buyWindow?<BuyStockWindow stock={stock}/>:null}
    </>
  );
};