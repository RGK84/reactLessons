import React from 'react';
import CustomeLink from '../components/CustomeLink';
import '../index.css';

function HomePage() {
    return (
    <div >
        <ul className="App-menu">
            <li>
                <CustomeLink to="/profile">Profile</CustomeLink>
            </li>
            <li>
                <CustomeLink to="/chats">Chats</CustomeLink>
            </li>
        </ul>
    </div>
    );
}

export default HomePage;