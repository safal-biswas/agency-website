import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
        }
        window.addEventListener('scroll', handleScroll)
    })

    //navitems array
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Services", path: "services" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ]

    return (
        <header className='w-full bg-gray-600 md:bg-transparent fixed top-0 left-0 right-0'>
            <nav>
                <div>
                    <a href="#" className='flex mt-5' >
                        <img src="{logo}" alt="logo" />
                        <span>ASDF</span>
                    </a>
                    <ul>
                        {navItems.map((item) => {
                            <li key={item.path}>{item.link}</li>
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
