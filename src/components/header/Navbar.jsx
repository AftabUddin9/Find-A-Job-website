import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: "Home", path: "/" },
        { link: "Jobs", path: "/jobs" },
        { link: "Companies", path: "/companies" },
        { link: "Career", path: "/career" },
        { link: "Services", path: "/services" },
        { link: "Blog", path: "/blog" },
        { link: "Contact", path: "/contact" },
    ];

    return (
        <div>
            <nav className='bg-white md:px-32 p-6 max-w-screen-2xl shadow-lg mx-auto fixed top-0 left-0 right-0 z-50'>
                <div className='text-md container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex gap-20 items-center'>
                        <a href='/' className='flex items-center space-x-3 text-primary'>
                            <img src={logo} alt='Logo' className='w-20 inline-block items-center' />
                        </a>

                        {/* showing navItems using map */}
                        <ul className='md:flex space-x-8 hidden'>
                            {
                                navItems.map(({ link, path }) => (
                                    <Link
                                        key={link}
                                        activeClass='active'
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        to={path}
                                        className='block hover:text-[#9378DE] cursor-pointer'
                                    >
                                        {link}
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>

                    {/* login and signup */}
                    <div className='space-x-8 hidden md:flex items-center'>
                        <Link to='/login'>
                            <button className='bg-white text-[#785fbe] rounded-full border-[1px] border-[#785fbe] shadow-xl min-w-32 p-[4px] pb-[7px] hover:text-black'>
                                <span className='font-bold'>Login</span>
                            </button>
                        </Link>
                        <Link to='/signup'>
                            <button className='bg-[#785fbe] text-white rounded-full border-[1px] border-[#785fbe] shadow-xl min-w-32 pt-[4px] pb-[7px] hover:bg-[#9378DE]'>
                                <span className='font-bold'>Sign up</span>
                            </button>
                        </Link>
                    </div>

                    {/* menu button for mobile only */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-black focus:outline-none focus:text-gray-900'
                            aria-label='Toggle menu'
                        >
                            {
                                isMenuOpen ? (<FaTimes className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-0 right-0 left-0 bg-[#785fbe] z-40`}>
                <div className='pt-[7rem] pb-5'>
                    <ul className='flex flex-col items-center space-y-4'>
                        {
                            navItems.map(({ link, path }) => (
                                <Link
                                    key={link}
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    to={path}
                                    className='block text-white hover:text-gray-300'
                                    onClick={toggleMenu}
                                >
                                    {link}
                                </Link>
                            ))
                        }
                        <li>
                            <Link to='/login' onClick={toggleMenu}>
                                <button className='bg-white text-[#785fbe] rounded-full border-[1px] border-[#785fbe] shadow-xl min-w-32 p-[4px] pb-[7px]'>
                                    <span className='font-bold'>Login</span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/signup' onClick={toggleMenu}>
                                <button className='bg-[#785fbe] text-white rounded-full border-[1px] border-[#785fbe] shadow-xl min-w-32 pt-[4px] pb-[7px]'>
                                    <span className='font-bold'>Sign up</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
