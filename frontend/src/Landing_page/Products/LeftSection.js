export default function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, playStore, appStore }) {
    return (
        <div className="container offset-1 mt-5">
            <div className="row p-5">
                <div className="col-5">
                    <img src={imageUrl} alt='productImage' />
                </div>
                <div
                    className="col-2"></div>
                <div className="col-5 mt-5 pt-5">
                    <h2>{productName}</h2>
                    <p className="col-8 ">{productDescription}</p>
                    <div className="mb-3">
                      {tryDemo ? (
                            <a   style={{marginRight:"2rem"}} href=''>
                                {tryDemo}&nbsp;&nbsp; <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        ) : null}
                        {learnMore ? (
                            <a href=''>
                                {learnMore}&nbsp;&nbsp; <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        ) : null}

                    </div>
                    <div>
                        <a style={{ marginRight: "2.5rem" }} href={playStore}><img src='/media/googlePlayBadge.svg' alt='playstore' /></a>
                        <a href={appStore}><img src='/media/appstoreBadge.svg' alt='appstore' /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}