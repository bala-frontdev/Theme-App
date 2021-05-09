import React from 'react'
import {
    Nav,
    NavLink,
    NavBtn
} from './NavBarElems'

export const NavBar = () => {
    return (
        <>
            <Nav className="nav-bar">
                <li><NavLink to ="/">Home</NavLink></li>
                <li><NavLink to ="/">Categories</NavLink></li>
                <li><NavLink to ="/">Store</NavLink></li>
                <li><NavLink to ="/">Support</NavLink></li>
                <li><NavLink to ="/">About</NavLink></li>
            </Nav>
        </>
    )
}
