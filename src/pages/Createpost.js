import React from 'react';
import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';
const Createpost = () => {
    const {sigout} = useAuth()
    const navigate = useNavigate()
    return (
        <div>
            <h2>CreatePost</h2>
            <button onClick={() => sigout(() => navigate('/', {replace: true}))}>log out</button>
        </div>
    );
}

export default Createpost;
