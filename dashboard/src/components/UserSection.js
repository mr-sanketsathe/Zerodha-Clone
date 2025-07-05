import './UserSection.css';
import Logout from './context/UserContext';
export default function UserSection(){

    return(
        <div className="usermenu">
                <p className='list-item'>Profile</p>
                <p className='list-item'>Settings</p>
                <p onClick={Logout}className='list-item'>Logout</p>
        </div>
    )
}