import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const navItems = [
        { link: "Home", path: "/" },
        { link: "Jobs", path: "/jobs" },
        { link: "Companies", path: "/companies" },
        { link: "Career", path: "/career" },
        { link: "Services", path: "/services" },
        { link: "Blog", path: "/blog" },
        { link: "Contact", path: "/contact" },
    ]
    return (
        <div className='max-w-[1920px] shadow-lg'>
            <nav className='static bg-transparent'>
                <div className='flex items-center justify-between relative py-4 mx-20'>
                    {/* logo */}
                    <Link to='/'>
                        <img src={logo} className='w-28 rounded-full' />
                    </Link>
                    {/* links */}
                    <ul className='flex items-center gap-x-3'>
                        {
                            navItems.map(({ link, path }) =>
                                <Link to={path} className='hover:text-[#9378DE] group relative'>
                                    <p className='block px-3 py-4 cursor-pointer'>
                                        <span className='flex items-center font-semibold'>{link}</span>
                                    </p>
                                </Link>)
                        }
                    </ul>
                    {/* buttons */}
                    <div className='flex gap-3'>
                        <Link>
                            <button className='bg-white text-[#785fbe] rounded-full border-[1px] border-[#785fbe] shadow-xl min-w-32 p-[4px] pb-[7px] hover:text-black'>
                                <span className='font-bold'>Post a Job</span>
                            </button>
                        </Link>
                        <Link>
                            <button className='bg-[#785fbe] text-white rounded-full border-[1px] border-[#785fbe] shadow-xl min-w-32 pt-[4px] pb-[7px] hover:bg-[#9378DE]'>
                                <span className='font-bold'>Apply</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar