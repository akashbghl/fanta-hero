import React from 'react'
import Logo from '../assets/logo.png'
import { MenuIcon, User } from 'lucide-react';
import { motion } from 'motion/react';
import { UpdateFollower } from 'react-mouse-follower';
const Navbar = () => {
    const NavbarMenu = [
        {
            id: 1,
            title: "Home",
            link: "#",
        },
        {
            id: 2,
            title: "Categories",
            link: "#",
        },
        {
            id: 3,
            title: "Blog",
            link: "#",
        },
        {
            id: 4,
            title: "About",
            link: "#",
        },
        {
            id: 5,
            title: "Contact",
            link: "#",
        },
    ];
    return (
        <div className='text-white py-4 '>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1 , delay:0.5}}
            className="container flex justify-between items-center">
                {/* Logo section  */}
                <div>
                    <img src={Logo} alt="logo" className='max-w-[100px] invert' />
                </div>

                {/* Menu Section  */}
                <div className='hidden md:block'>
                <UpdateFollower
                mouseOptions={{followSpeed:0.5, backgroundColor:'white',zIndex:9999, mixBlendMode:'difference', scale:5}}
                >
                    <ul
                    className='flex items-center gap-4 relative z-40'>
                        {NavbarMenu.map((item) => (
                            <motion.li key={item.id}>
                                <a href={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase'>{item.title}</a>
                            </motion.li>
                        ))}
                        <button className='text-xl ps-14'>
                            <User/>
                        </button>
                    </ul>
                </UpdateFollower>
                </div>
                {/* Hamburger Icon  */}
                <div className='md:hidden'>
                    <MenuIcon className='text-4xl' />
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar