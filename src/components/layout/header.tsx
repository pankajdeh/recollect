"use client";
import React from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
    const handleBurgerClick = () => {
        console.log("Clicked");
    };

    return (
        <header className="h-16 border-b bg-white flex items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo and Burger Icon */}
            <div className="flex items-center">
                <div className="md:hidden">
                    <Link href={'/'}>
                        <Image
                            src={'/company-logo.png'}
                            alt="company logo"
                            width={120} 
                            height={40} 
                            className="w-auto h-8 sm:h-10" 
                        />
                    </Link>
                </div>

                <div className="md:hidden ml-4">
                    <Menu
                        className="h-6 w-6 text-gray-600 cursor-pointer"
                        onClick={handleBurgerClick}
                    />
                </div>
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-4">

                <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold">
                        P
                    </div>

                    <div className="hidden sm:flex sm:flex-col sm:text-sm">
                        <span className="font-medium text-black">Pankaj </span>
                        <span className="text-xs text-gray-500">pankaj.dev@resollect.com</span>
                    </div>

                    <ChevronDown className="h-4 w-4 text-gray-400 cursor-pointer" />
                </div>
            </div>
        </header>
    );
}