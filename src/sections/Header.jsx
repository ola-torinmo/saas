"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ArrowRight from '../assets/warrow.png';
import Logo from '../assets/logosaas.png';
import MenuIcon from '../assets/menu.svg';
import { twMerge } from 'tailwind-merge';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = bannerRef.current?.offsetHeight || 0;
      setIsScrolled(window.scrollY > bannerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={twMerge(
        'sticky top-0 backdrop-blur-sm z-20 transition-colors duration-300',
        isScrolled ? 'bg-transparent' : 'bg-[#E9EDFD]'
      )}
    >
      {/* Black banner at top */}
      <div
        ref={bannerRef}
        className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3"
      >
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <Image
            src={ArrowRight}
            alt="Arrow Right"
            width={16}
            height={16}
            className="h-4 w-4 inline-flex justify-center items-center"
          />
        </div>
      </div>

      {/* Main nav */}
      <div className="py-5 px-12">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <Image
              src={MenuIcon}
              alt="Menu Icon"
              width={20}
              height={20}
              className="h-5 w-5 md:hidden"
            />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
