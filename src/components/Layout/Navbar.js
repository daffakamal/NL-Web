import React from "react";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/images/nightLogin.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navButtons = (title, link) => {
        return (
            <Link 
                className="w-full hover:text-gray-200" 
                to={link}
            >
                {title}
            </Link>
        )
    }

    const links = [
        { href: '#!', title: 'NADC' },
        { href: '#!', title: 'NCPC' },
        { href: '#!', title: 'NDDC' },
        { href: '#!', title: 'NLNC' },
        { href: '#!', title: 'NUXC' },
        { href: '#!', title: 'NWDC' },
    ]

    return ( 
        <div className="w-full bg-red-NL shadow-2xl fixed z-40 px-14 md:px-20 lg:px-[134px]">
            <div className="mx-auto container">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex items-center my-5">
                        <a 
                            href="/"
                            className="flex items-center"
                        >
                            <img 
                                src={logo} 
                                className="inline mr-4 w-[44px]" 
                                alt="Logo Night Login" 
                            />
                            <h1 className="inline font-poppinsSemi text-2xl text-white">
                                Night Login
                            </h1>
                        </a>
                    </div>
                    <div className="flex gap-x-14 xl:gap-x-16 font-poppinsMedium text-lg text-white">
                        {navButtons("Home", "/")}
                        {navButtons("About", "/about")}
                        <a
                            href="#!"
                            className="flex items-center hover:text-gray-200"
                        >
                            Event
                        </a>
                        <a
                            href="#!"
                            className="flex items-center hover:text-gray-200"
                        >
                            Community
                        </a>
                        {/* <Menu className="flex items-center">
                            <Menu.Button className="flex gap-x-4">
                                Community
                                <ChevronDownIcon className="w-4" />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            ></Transition>
                            <Menu.Items>
                                {links.map((link) => (
                                <Menu.Item key={link.href} as={Fragment}>
                                    {({ active }) => (
                                    <a
                                        href={link.href}
                                        className={`${
                                        active ? 'bg-red-NL text-white' : 'bg-red-NL text-white'
                                        }`}
                                    >
                                        {link.title}
                                    </a>
                                    )}
                                </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Menu> */}
                    </div>
                </div>
                <div>
                
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;