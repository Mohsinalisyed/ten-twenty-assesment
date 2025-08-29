"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CloseIcon, ForwardArrowIcon, HamburgerIcon } from "../icons";
import { Button } from "../ui";
import { navLinks } from "@/utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed md:top-5 md:left-5 md:right-5 z-10 w-full md:w-auto max-w-full transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full hidden"
      }`}
    >
      <div className="mx-auto bg-white max-w-[1440px] shadow">
        <div className="h-full p-6 md:p-10 flex items-center justify-between">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-[20px]">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-black font-fontWorkSans text-sm"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link href="/contact" className="bg-seashellColor">
            <span className="text-base border border-black px-4 py-[10px] flex items-center gap-4 text-raisinBlackColor">
              Contact us
              <ForwardArrowIcon />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 bg-alabasterColor h-12 w-12"
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow">
            <div className="p-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex py-2 text-black font-fontWorkSans text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
