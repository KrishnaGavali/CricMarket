"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn } from "lucide-react";

const Navbar = () => {
  const currentPathName = usePathname();

  return (
    <motion.nav
      className="w-full backdrop-blur-sm mx-auto h-16 flex items-center fixed z-50 bg-background/50 border border-foreground mt-6 rounded-full"
      // initial={{
      //   top: -100,
      // }}
      // animate={{
      //   top: 0,
      //   transition: {
      //     duration: 0.25,
      //     delay: 0.2,
      //     ease: "easeInOut",
      //   },
      // }}
      // transition={{
      //   duration: 0.075,
      // }}
    >
      <div className=" flex items-center justify-center p-2 text-xs md:text-base w-full">
        <div className="w-1/5 h-full flex items-center" id="logo">
          <Link href={"/"}>
            <h1 className="text-white text-lg md:text-xl lg:text-2xl font-semibold ml-4 lg:ml-8">
              Cric<span className="text-foreground">Market</span>
            </h1>
          </Link>
        </div>
        <div className="w-[60%] h-full" id="nav_items">
          <AnimatePresence mode="wait">
            {currentPathName === "/auth/login" ||
            currentPathName === "/auth/signup" ? null : (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                }}
              >
                <NavigationMenu viewport={true} className=" mx-auto">
                  <NavigationMenuList className=" flex items-center justify-between gap-0">
                    <NavigationMenuItem className=" underlineAnimation cursor-pointer transition-all duration-300  w-fit text-center px-4 py-2">
                      <NavigationMenuTrigger
                        className=" text-base font-semibold"
                        showArrow={false}
                      >
                        <Link href="/">Home</Link>
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem className=" cursor-pointer transition-all duration-300 w-fit text-center px-4 py-2">
                      <NavigationMenuTrigger className=" text-base font-semibold">
                        Matches
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem className=" cursor-pointer transition-all duration-300  w-fit text-center px-4 py-2">
                      <NavigationMenuTrigger
                        className="hover:text-white transition-all duration-300 text-base font-semibold"
                        showArrow={false}
                      >
                        How to play
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem className=" cursor-pointer transition-all duration-300  w-fit text-center px-4 py-2">
                      <NavigationMenuTrigger className=" text-base font-semibold">
                        LeaderBoards
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className="w-1/5 h-full flex items-center justify-end space-x-4"
          id="auth_profile_items"
        >
          <Link href={"/auth/login"}>
            <button className=" flex px-4 py-2 bg-blue-800 border border-blue-800 text-white rounded-md cursor-pointer hover:bg-transparent hover:text-foreground transition-all duration-300 mx-4 lg:mx-8 text-sm md:text-base">
              <span className="mr-1">Login</span>
              <LogIn />
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
