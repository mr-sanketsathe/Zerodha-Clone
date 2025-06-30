import React from 'react';
function Awards() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 mt-5'>
                    <img src='/media/largestBroker.svg'alt='award'/>
                </div>
                <div className='col-6  mt-5 text-start'>
                    <h1>Largest Stock broker in India</h1>
                    <p>2+milion zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className='row p-4'>
                        <ul className='col-6'>
                       <li>
                        <p>Future and Options</p>
                       </li>
                        <li>
                        <p>Commodity derivatives</p>
                       </li>
                        <li>
                        <p>Currency derivatives</p>
                       </li>
                    </ul>
                    <ul className='col-6'>
                       <li>
                        <p>Stocks & IPOs</p>
                       </li>
                        <li>
                        <p>Direct mutual funds</p>
                       </li>
                        <li>
                        <p>Bonds and Govt.</p>
                       </li>
                    </ul>
                    <img src='/media/pressLogos.png' style={{width:'80%'}} alt='preslogos'/>
                    </div>
                    
                </div>
            </div>
        </div>
         );
}

export default Awards;