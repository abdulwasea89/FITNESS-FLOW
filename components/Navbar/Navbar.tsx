"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, ShoppingBag } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const atTop = window.scrollY <= 10;
            setScrolled(!atTop);
            if (!atTop && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    return (
        <>
            <nav className="fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 backdrop-filter backdrop-blur-lg bg-black/60">
                <div className="mx-auto flex items-center justify-between px-6 py-6 md:px-10 h-full">
                    <Link href="#">
                        <div className="text-xl font-bold text-white">FITNESS FLOW</div>
                    </Link>

                    <button
                        className="md:hidden flex flex-col justify-center items-center space-y-1"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </button>

                    <div className="hidden md:flex items-center gap-8">
                        {['Home', 'About', 'Services', 'Contact'].map(link => (
                            <a key={link} href="#" className="text-gray-300 hover:text-white transition">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="p-2 rounded-lg text-white">
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-lg text-white">
                            <ShoppingBag className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed inset-x-0 top-20 z-40 bg-black px-6 py-4 flex flex-col space-y-2 transition-all duration-300 ease-in-out overflow-auto
                ${isMenuOpen ? 'opacity-100 h-[calc(100vh-5rem)] pointer-events-auto' : 'opacity-0 h-0 pointer-events-none'}`}
            >
                {['Home', 'About', 'Services', 'Contact'].map(item => (
                    <a
                        key={item}
                        href="#"
                        onClick={closeMenu}
                        className="text-gray-200 hover:text-white transition py-2"
                    >
                        {item}
                    </a>
                ))}

                <div className="flex flex-col space-y-2 mt-4">
                    <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg text-white">
                        <ShoppingCart className="w-5 h-5" />
                        Shop
                    </button>
                    <button className="w-full px-4 py-2 font-sans font-medium bg-red-600 text-black hover:bg-gray-200 transition rounded-full">
                        Book a Session
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
