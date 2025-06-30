import React from 'react';
function Education() {
    return (<div className='container'>
        <div className='row p-5'>
            <div className='col-6 mt-5'>
                <img src='/media/education.svg' alt='education' />
            </div>
            <div className='col-6  mt-5 text-start'>
                <h1 className='fs-2 text-muted mb-4'>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a style={{textDecoration:'none'}} href='#'>Varsity<i className="fa-solid fa-arrow-right"></i></a>
                 <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a  href='#'>Trading Q&A<i className="fa-solid fa-arrow-right"></i></a>   
                
                

            </div>
        </div>
    </div>
    );
}

export default Education;