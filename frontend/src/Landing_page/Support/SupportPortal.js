export default function SupportPortal(){
    return(
        <section className='portal-box'>
            <div className="container portal-head">
                <h3 >Support Portal</h3>
                <a style={{textDecoration:"underline" ,color:"white"}} href="">Track tickets</a>
            </div>
            <div className="row">
                <div className="col-8 p-4">
                    <h5>Search for an answer or browse help topics to create a ticket</h5>
                    <input className="col-10 p-3 mt-4 input-box" placeholder="Eg.how do i activate F&O"/><br/>
                    <a style={{textDecoration:"underline" ,color:"white"}} href="">Track account opening</a>&nbsp;&nbsp;&nbsp;
                    <a style={{textDecoration:"underline" ,color:"white"}} href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;
                    <a style={{textDecoration:"underline" ,color:"white"}} href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;
                    <a style={{textDecoration:"underline" ,color:"white"}} href="">Kite user manual</a>&nbsp;&nbsp;
                </div>
                <div className="col-4">
                    <h5 className="mt-3">Features</h5>
                    <ol>
                        <li className="mt-3"><a style={{textDecoration:"underline" ,color:"white"}} href=''>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                        <li className="mt-3"><a  style={{textDecoration:"underline" ,color:"white"}} href=''>Revision in expiry day of Index and Stock derivatives contracts</a></li>
                    </ol>
                </div>
            </div>
        </section>
       
    )
}