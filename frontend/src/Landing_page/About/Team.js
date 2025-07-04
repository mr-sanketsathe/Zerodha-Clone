import React from 'react';
function Team() {
    return (
        <div className='container'>


            <div className="row text-center p-5">
                <h1 className="fs-2  mb-5">People</h1>
                <div className="row ">
                    <div className="col-6 ">
                        <img src='/media/nithinKamath.jpg' alt='founder' style={{ borderRadius: "50%", width: '50%' }} />
                        <h3 className="fs-4 mt-1">Nithin Kamath</h3>
                        <h4 className="fs-5 text-muted mt-1">Founder, CEO</h4>
                    </div>
                    <div className="col-6 text-start text-muted" style={{ fontSize: '1.1em' }}>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                        <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA </a>/ <a href=''>Twitter</a></p>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Team;