import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export const NavBar = () => {
    return (
    <div className="nav_div_style">
    <Link href="/">
        <img className="logo" src="/Toscaro_logo.png" alt="logo"/>
    </Link>
    <nav>
        <ul className="nav__links">
            <CustomNavLink to="/about">About</CustomNavLink>
            <CustomNavLink to="/projects">Projects</CustomNavLink>
            <CustomNavLink to="/contact">Contact</CustomNavLink>
        </ul>
    </nav>
    </div>
    )
}

function CustomNavLink({to, children, ...props}) {
    const router = useRouter()
    const isActive = router.pathname === to
    const className = isActive ? "active" : ""
    return (
    <li className={className}>
        <Link className={className} href={to} {...props}>
            {children}
        </Link>
    </li>
    )
}