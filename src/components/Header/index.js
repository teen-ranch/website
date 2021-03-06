import React, { useState, useEffect } from 'react'

import './hamburger.scss'
import './header.scss'
import Container from 'components/Container'
import { Link as RouterLink, useLocation } from '@reach/router'

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
                        {/* eslint-disable-next-line */}
                        <li><a target="_blank" rel="noopener" href='https://shop.teenranch.com'>Shop</a></li>
                        <li><Link to="/programs/">Programs</Link>
                            <ul className='subNav'>
                                <li><Link to='/programs/hockey-and-skating/'>Hockey & skating</Link>
                                    <div className='subNavDivider'>Skating</div>
                                    <ul className='subSubNav'>
                                        <li><Link to='/programs/hockey-and-skating/learn-to-skate/'>Learn to skate</Link></li>
                                        <li><Link to='/programs/hockey-and-skating/skating-development/'>Skating development</Link></li>
                                        <li><Link to='/programs/hockey-and-skating/starskate-and-competitive-figure-skating/'>STARSkate & Competitive Figure Skating</Link></li>
                                    </ul>
                                    <div className='subNavDivider'>Skills</div>
                                    <ul className='subSubNav'>
                                        <li><Link to='/programs/hockey-and-skating/pre-season-skills-and-skating/'>Pre-season skills & skating</Link></li>
                                        <li><Link to='/programs/hockey-and-skating/skills-development/'>Skills development</Link></li>
                                        <li><Link to='/programs/hockey-and-skating/adult-hockey-skills/'>Adult hockey skills</Link></li>
                                    </ul>
                                    <div className='subNavDivider'>Leagues</div>
                                    <ul className='subSubNav'>
                                        <li><Link to='/programs/hockey-and-skating/pond-hockey-league/'>Pond hockey league</Link></li>
                                        <li><Link to='/programs/hockey-and-skating/mens-hockey-league/'>Men's hockey league</Link></li>
                                    </ul>
                                    <div className='subNavDivider'>Recreation</div>
                                    <ul className='subSubNav'>
                                        <li><Link to='/programs/hockey-and-skating/ice-rental/'>Ice rental</Link></li>
                                        <li><Link to='/programs/hockey-and-skating/public-skating/'>Public skating</Link></li>
                                    </ul>
                                </li>
                                <li><Link to='/programs/horses/'>Horses</Link>
                                    <div className='subNavDivider'>Shows</div>
                                    <ul className='subSubNav'>
                                        <li><Link to='/programs/horses/hunter-jumper-shows/'>Hunter / Jumper shows</Link></li>
                                    </ul>
                                    <div className='subNavDivider'>Schooling</div>
                                    <ul className='subSubNav'>
                                        <li><Link to='/programs/horses/riding-lessons/'>Riding lessons</Link></li>
                                        <li><Link to='/programs/horses/schooling-ring-rental/'>Schooling ring rental</Link></li>
                                    </ul>
                                    <div className='subNavDivider'>Recreation</div>
                                    <ul className='subSubNav'>
                                        <li><Link to='/programs/horses/trail-rides/'>Trail rides</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/staff/">Staff</Link></li>
                        <li><a href="https://teenranchcanada.wordpress.com/" rel='noopener noreferrer'>Blog</a></li>
                        <li><Link to="/contact/">Contact</Link></li>
                        <li className='giveLink'><Link to="/give/">Give</Link></li>
                        <li><a className='ctaLink' rel="noopener noreferrer" href='https://register.trmanager.com'>Sign up</a></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )

}

export const Link = props => (
    <RouterLink
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          className: isCurrent ? 'active' : ''
        };
      }}
    />
  );