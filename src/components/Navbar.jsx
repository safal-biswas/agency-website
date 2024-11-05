import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-scroll';

//react icon
import { FaXmark, FaBars } from "react-icons/fa6"

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
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })

    //navItems array
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Services", path: "services" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex items-center justify-between text-base gap-8 px-4 py-4'>
                    <a href="#" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt="logo" className='w-10 inline-block items-center' />
                        <span>Agency Name</span>
                    </a>

                    {/* nav items for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
                        }
                    </ul>

                    {/* btn for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='lg: flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray'>Sign up</button>
                    </div>

                    {/* menu btn for inly mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu}
                            className='text-neutralDGray focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGray' />) : (<FaBars className='h-6 w-6 text-neutralDGray' />)
                            }
                        </button>
                    </div>
                </div>

                {/* nav items for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary text-center ${isMenuOpen ? "block fixed top-10 left-0 right-0 md:hidden" : "hidden"}`} >
                    {
                        navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-green-800 first:font-medium'>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    );

}
