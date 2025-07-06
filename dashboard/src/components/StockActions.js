import {Tooltip} from "@mui/material";
import {MoreHoriz,BarChartOutlined}  from '@mui/icons-material';
export default function StockActions({handleBuy,handleSell}){
    return(
        <>
         <span className="actions">
              <span >
                <Tooltip
                  title="Buy (B)"
                  placement="top"
                  arrow 
                >
                  <button onClick={handleBuy} className="buy">Buy</button>
                </Tooltip>
                <Tooltip
                  title="Sell (S)"
                  placement="top"
                  arrow
                  
                >
                  <button onClick={handleSell} className="sell">Sell</button>
                </Tooltip>
                <Tooltip
                  title="Analytics (A)"
                  placement="top"
            
                >
                  <button className="action">
                    <BarChartOutlined className="icon" />
                  </button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow>
                  <button className="action">
                    <MoreHoriz className="icon" />
                  </button>
                </Tooltip>
              </span>
            </span>
            </>
    )
}