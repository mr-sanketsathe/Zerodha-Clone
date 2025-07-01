import {Link} from "react-router-dom";
export default function NotFound(){
    return(
        <div className="container text-center m-5">
            <h1 > 404 Page Not Found</h1>
            <p>Sorry,the page you are currently visiting is not exist</p>
            <Link to='/'><button className="btn btn-primary">Go to Home</button></Link> 
        </div>
    )
}