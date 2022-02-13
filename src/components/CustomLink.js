import React from 'react';
import { Link} from 'react-router-dom'
const Customlink = ({children, to, ...props}) => {
    return (
        <div >
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    );
}

export default Customlink;
