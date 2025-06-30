import React from 'react';
function Pricing() {
    return (
        <div className='container'>
            <div className='row text-start p-5'>
                <div className='col-4 mt-5'>
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                     <a href='#'>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mt-5'>
                    <div className='row border '>
                        <div className='col-4 border'><img src='/media/pricing1.svg' style={{width:'60%'}} alt='pricing1' /><p>Free account opening</p></div>
                        <div className='col-4 border'><img src='/media/pricing1.svg' style={{width:'60%'}} alt='pricing1' /><p>Free equity delivery
                            and direct mutual funds</p></div>
                        <div className='col-4 border'><img src='/media/pricing2.svg'  style={{width:'60%'}} alt='pricing2' /><p>Intraday and
                            F&O</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;