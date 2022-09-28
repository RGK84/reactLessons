import React from 'react';
import {Link, useMatch} from "react-router-dom";

function CustomeLink({to, children}) {
    const match = useMatch(to);
    return (
    <Link to={to} style={{color: match ? 'red' : 'black'}}>
        {children}
    </Link>
    );
}

export default CustomeLink;