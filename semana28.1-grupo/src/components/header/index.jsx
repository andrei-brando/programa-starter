import React from 'react';
import { HeaderComponentStyle } from './style';

export default function Header() {
    return (
        <HeaderComponentStyle>
            <ul className="nav-links">
                <li><a href="#">Dashboard</a></li>
                <li className="center"><a href="#">Portfolio</a></li>
                <li className="upward"><a href="#">Services</a></li>
                <li className="forward"><a href="#">Contact</a></li>
            </ul>
        </HeaderComponentStyle>
    );
}
