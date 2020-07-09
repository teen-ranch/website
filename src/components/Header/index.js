import React, { useState, useEffect } from 'react'

import './hamburger.scss'
import './header.scss'
import Container from 'components/Container'
import { NavLink as Link, useLocation } from 'components/Router'

import logo from './teenRanchLogo_lightBGR.svg'

export default function Header() {

    const [expanded, setExpanded] = useState()

    const location = useLocation()

    useEffect(() => {
        setExpanded()
    }, [location])

    return (
        <header>
            <Container type={`header${ expanded ? ' header--expanded' : '' }`}>
                <Link to='/'><img className='logo' src={ logo } alt='Teen Ranch Logo' /></Link>
                <button className={`hamburgerMenu ${ expanded ? 'hamburgerMenu--active' : '' }`} onClick={() => setExpanded(expanded => !expanded)} aria-label='Navigation menu'>
                    <span className='hamburgerBox'>
                        <span className='hamburgerInner'></span>
                    </span>
                </button>
                <nav className={`menu ${ expanded ? 'menu--expanded' : '' }`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/programs ">Programs
                            <ul className='subNav'>
                                <li><Link to='/programs/hockey'>Hockey</Link></li>
                                <li><Link to='/programs/horses'>Horses</Link></li>
                            </ul>
                        </Link></li>
                        <li><Link to="/staff ">Staff</Link></li>
                        {/* <li><Link to="/contact ">Contact</Link></li> */}
                        <li><a className='ctaLink' href='https://register.trmanager.com'>Sign up</a></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )

}