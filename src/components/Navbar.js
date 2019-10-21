import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.jpg';
import styled from  'styled-components'

export default class Navbar extends Component {
    render() {
        return (    
            <NavWrapper className="navbar navbar-expand-sm  align-items-center navbar-dark px-sm-5">   
                <ul className='navbar-nav align-items-center'>
                    <li className="nav-item ml-5">
                        <Link to="/about" className="nav-link">
                            about
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/contact" className="nav-link">
                            contact
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/productlist" className="nav-link">
                            products
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/cart" className="nav-link">
                            cart
                        </Link>
                    </li>
                    
                </ul>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    margin: 20px;
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 2rem;
        text-transform: capitalize !important;
    }
`