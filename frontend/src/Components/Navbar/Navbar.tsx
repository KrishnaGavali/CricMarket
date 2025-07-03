"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, Menu, User } from "lucide-react";

const Navbar = () => {
  const currentPathName = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div
        className={`inset-0 z-[4] h-screen w-screen fixed backdrop-blur-xs transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        id="overlay"
      />
      <motion.nav className="w-full backdrop-blur-sm mx-auto h-16 flex items-center fixed z-50 bg-background/50 border border-foreground mt-2 rounded-full">
        <div className="flex items-center justify-center p-2 text-xs md:text-base w-full">
          {/* Logo */}
          <div className="w-1/5 h-full flex items-center" id="logo">
            <Link href="/" onClick={closeMobileMenu}>
              <h1 className="text-white text-lg md:text-xl lg:text-2xl font-semibold ml-4 lg:ml-8">
                Cric<span className="text-foreground">Market</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="w-[60%] h-full" id="nav_items">
            <AnimatePresence mode="wait">
              {currentPathName === "/auth/login" ||
              currentPathName === "/auth/signup" ? null : (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <NavigationMenu
                    viewport={true}
                    className="mx-auto hidden md:block"
                  >
                    <NavigationMenuList className="flex items-center justify-between gap-0">
                      <NavigationMenuItem className="underlineAnimation cursor-pointer transition-all duration-300 w-fit text-center px-4 py-2">
                        <NavigationMenuTrigger
                          className="text-base font-semibold"
                          showArrow={false}
                        >
                          <Link href="/">Home</Link>
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="cursor-pointer transition-all duration-300 w-fit text-center px-4 py-2">
                        <NavigationMenuTrigger className="text-base font-semibold">
                          Matches
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="cursor-pointer transition-all duration-300 w-fit text-center px-4 py-2">
                        <NavigationMenuTrigger className="text-base font-semibold">
                          LeaderBoards
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Auth buttons + Mobile Menu */}
          <div
            className="w-1/5 h-full flex items-center justify-end space-x-1"
            id="auth_profile_items"
          >
            <Link href="/auth/login" className="hidden md:block">
              <button className="flex items-center justify-center px-2 py-1 md:px-4 md:py-2 bg-blue-800 border border-blue-800 text-white rounded-md cursor-pointer hover:bg-transparent hover:text-foreground transition-all duration-300 mx-0.5 sm:mx-1 text-sm md:text-base">
                <LogIn />
              </button>
            </Link>
            <Link href="/auth/signup" className="hidden md:block">
              <button className="flex items-center justify-center px-2 py-1 md:px-4 md:py-2 bg-blue-800 border border-blue-800 text-white rounded-md cursor-pointer hover:bg-transparent hover:text-foreground transition-all duration-300 mx-0.5 sm:mx-1 text-sm md:text-base">
                <User />
              </button>
            </Link>
            <motion.button
              onClick={toggleMobileMenu}
              className="md:hidden"
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="min-h-16 min-w-10 mr-5 text-white" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 left-4 right-4 bg-background border border-foreground rounded-xl p-4 z-40 backdrop-blur-lg shadow-lg"
          >
            <ul className="flex flex-col space-y-4 text-white font-semibold text-base">
              <li>
                <Link href="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/matches" onClick={closeMobileMenu}>
                  Matches
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" onClick={closeMobileMenu}>
                  LeaderBoards
                </Link>
              </li>
              <li className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <Link href="/auth/login" onClick={closeMobileMenu}>
                  <button className="w-full px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-transparent border hover:border-white transition-all duration-300">
                    <LogIn className="inline-block mr-1" size={18} /> Login
                  </button>
                </Link>
                <Link href="/auth/signup" onClick={closeMobileMenu}>
                  <button className="w-full px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-transparent border hover:border-white transition-all duration-300">
                    <User className="inline-block mr-1" size={18} /> Signup
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
