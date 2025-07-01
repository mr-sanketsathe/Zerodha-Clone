export default function Pricing(){
    return(
         <div className="container text-center mt-5 p-5">
            <div className="row">
                <div className="col-4 p-5">
                    <img  style={{width:"70%"}} src='/media/pricingEquity.svg' alt="pricingEquity"/>
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img  style={{width:"70%"}} src='/media/intradayTrades.svg' alt="intradayTrades"/>
                    <h2 >Intraday and F&O trades</h2>
                    <p className="text-muted">flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                 <div className="col-4 p-5">
                    <img style={{width:"70%"}} src='/media/pricingEquity.svg' alt/>
                    <h2>Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
         </div>
    )
}