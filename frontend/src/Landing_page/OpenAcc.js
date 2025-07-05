import React from 'react';
import {Link} from 'react-router-dom';
function OpenAcc() {
    return (  
    <div className='container text-center mt-5 p-5'>
            <h2 className='text-muted mb-4'>Open a Zerodha account</h2>
            <p className=' text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to='Signup'><button className='col-2 btn btn-primary p-2 fs-5 mt-1'>Sign up for free</button></Link>
    </div>);
}

export default OpenAcc;