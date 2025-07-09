export default function CreateTicket() {
    return (
        <div className="container mt-5 p-5">
            <h5 className="text-muted offset-1 mb-5">To create a ticket, select a relevant topic</h5>
            <div className="row offset-1">
                <div className="col-4">
                    <p><i className="fa-solid fa-circle-plus"></i>&nbsp;&nbsp; Account Opening</p>
                    <ul style={{ lineHeight: "1.8" }} >
                        <li><a href='#'>Resident individual</a></li>
                        <li><a href='#'>Minor</a></li>
                        <li><a href='#'>Non Resident Indian (NRI)</a></li>
                        <li><a href='#'>Company, Partnership, HUF and LLP</a></li>
                        <li><a href='#'>Glossary</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <p><i className="fa-solid fa-user"></i>&nbsp;&nbsp; Your Zerodha Account</p>
                    <ul style={{ lineHeight: "1.8" }}>
                        <li><a href='#'>Your Profile</a></li>
                        <li><a href='#'>Account modification</a></li>
                        <li><a href='#'>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                        <li><a href='#'>Nomination</a></li>
                        <li><a href='#'>Transfer and conversion of securities</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <p><i className="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;Kite</p>
                    <ul style={{ lineHeight: "1.8" }}>
                        <li><a href='#'>IPO
                        </a></li>
                        <li><a href='#'>
                            Trading FAQs
                        </a></li>
                        <li><a href='#'>
                            Margin Trading Facility (MTF) and Margins
                        </a></li>
                        <li><a href='#'>I
                            Charts and orders
                        </a></li>
                        <li><a href='#'>I
                            Alerts and Nudges
                        </a></li>
                    </ul>
                </div>
            </div>
            <div className="row offset-1">
                <div className="col-4">
                    <p><i className="fa-solid fa-wallet"></i>&nbsp;&nbsp; Funds</p>
                    <ul style={{ lineHeight: "1.8" }} >
                        <li><a href='#'>Resident individual</a></li>
                        <li><a href='#'>Resident individual</a></li>
                        <li><a href='#'>Resident individual</a></li>
                        <li><a href='#'>Resident individual</a></li>
                        <li><a href='#'>Resident individual</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <p><i className="fa-solid fa-info"></i>&nbsp;&nbsp; Console</p>
                    <ul style={{ lineHeight: "1.8" }} >
                        <li><a href=''>Portfolio
                        </a></li>
                        <li><a href='#'>Corporate actions</a></li>
                        <li><a href='#'>Funds statement</a></li>
                        <li><a href='#'>Reports</a></li>
                        <li><a href='#'>Profile</a></li>
                        <li><a href='#'>Segments</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <p><i className="fa-solid fa-coins"></i>&nbsp;&nbsp; Coin</p>
                    <ul style={{ lineHeight: "1.8" }} >
                        <li><a href=''>Mutual funds
                        </a></li>
                        <li><a href='#'>National Pension Scheme (NPS)l</a></li>
                        <li><a href='#'>Features on Coin</a></li>
                        <li><a href='#'>Payments and Orders</a></li>
                        <li><a href='#'>General</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}