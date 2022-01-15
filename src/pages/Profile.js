import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';


const Profile = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div>

            <h1>Profile Page</h1>
            {currentUser.displayName}
        </div>
    )
}

export default Profile
