import React from 'react';
import { Link, link } from 'react-router-dom';



function Navigation(props) {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/clock">Clock</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/jeopardy">Jeopardy</Link>
            </li>
        </ul>
    );
}
export default Navigation;