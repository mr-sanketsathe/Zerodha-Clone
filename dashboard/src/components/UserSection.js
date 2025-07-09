import logout from './context/UserContext';
export default function UserSection(){
    return(
        <div className="user-section-usermenu">
                <p className='user-section-list-item'>Profile</p>
                <p className='user-section-list-item'>Settings</p>
                <p onClick={logout}className='user-section-list-item'>Logout</p>
        </div>
    )
}