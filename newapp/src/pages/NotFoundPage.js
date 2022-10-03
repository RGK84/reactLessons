import React from 'react';
import {Link} from "react-router-dom";

function NotFoundPage() {
    return (
    <div >
        Page is not found. Go to <Link to='/'>Home</Link>
    </div>
    );
}

export default NotFoundPage;