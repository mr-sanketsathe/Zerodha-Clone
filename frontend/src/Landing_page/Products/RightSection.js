export default function RightSectionSection({ imageUrl, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5 offset-1">
            <div className="row p-5">
                <div style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'start'}} className="col-5 pt-5">
                    <h2 className="mb-4">{productName}</h2>
                    <p className="col-8 text-muted">{productDescription}</p>
                    <a style={{ marginRight: "2.5rem" }} href={learnMore}>learnMore<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6">
                    <img  style={{width:"90%",height:'100%'}}src={imageUrl} alt='productImage' />
                </div>

            </div>
        </div>
    )
}