import { Route, Routes, Navigate, Link } from "react-router-dom";
import React from 'react';
const About = () => {
    return (
        <div>
            <h2>About</h2>
            <ul>
                <li><Link to="contacts">OutContact</Link></li>
                <li><Link to="team">Team</Link></li>
            </ul>
            <Routes>
                 <Route path="contacts" element={<p>adsasdsadsad</p>}/>
                 <Route path="team" element={<p>team</p>}/>
            </Routes>
           
        </div>
    );
}

export default About;
