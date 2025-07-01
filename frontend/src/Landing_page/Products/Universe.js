export default function Universe() {
    const universe = [
        {
            companyLogo: "/media/zerodhaFundhouse.png",
            description: "Our asset management venture that is creating simple and transparent index funds that help you save for your goals."
        },
        {
            companyLogo: "/media/sensibullLogo.svg",
            description: "Options trading platform that let you  create statergies,analyze positions,examine data points like open interest"
        },
        {
            companyLogo: "/media/smallcaseLogo.png",
            description: "thematic investment platform that lets you is diversefied baskets on of stocks in ETFs"
        }
    ];

    return (
        <div className="container ">
            <p className=" fs-4 text-center mb-5">
                Want to know more about our technology stack? Check out the <a href=''>Zerodha.tech</a> blog.
            </p>
            <h1 className="mt-5 mb-5 text-center">The Zerodha Universe</h1>
            <p className="mb-5 text-center">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row offset-1">
                {
                    universe.map((company, index) => (
                        <div className="col-4 p-5 text-center" key={index}>
                                <img style={{width:"55%"}}src={company.companyLogo} alt="Company Logo"  />
                                <p className="text-muted mt-4">{company.description}</p>
                            </div>
                        
                    ))
                }
            </div>
        </div>
    );
}
