"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    MessageSquare,
    Bell,
    Gavel,
    FileText,
    Settings,
    Users,
    ShieldCheck
} from "lucide-react";
import Image from "next/image";

const navItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
        title: "Portfolio",
        href: "/portfolio",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "Notifications",
        href: "/notifications",
        icon: <Bell className="h-5 w-5" />,
    },
    {
        title: "Notices",
        href: "/notices",
        icon: <MessageSquare className="h-5 w-5" />,
    },
    {
        title: "Auction",
        href: "/auction",
        icon: <Gavel className="h-5 w-5" />,
    },
    {
        title: "Data Upload",
        href: "/upload-data",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "Control Panel",
        href: "/control-panel",
        icon: <Settings className="h-5 w-5" />,
    },
    {
        title: "User Management",
        href: "/user-management",
        icon: <Users className="h-5 w-5" />,
    },
    {
        title: "Permissions",
        href: "/permissions",
        icon: <ShieldCheck className="h-5 w-5" />,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex h-screen flex-col border-r bg-white w-64 fixed">
            <div className="p-4 ml-4 border-b flex items-center">
                <Link href={'/'} >
                    <Image src={'/company-logo.png'} alt="company logo" width={150} height={100} className="w-[60%] h-auto" ></Image>
                </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <nav className="space-y-1 px-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center px-2 mx-auto py-4 text-sm font-medium rounded-md",
                                pathname === item.href
                                    ? "bg-blue-600 text-white shadow-sm "
                                    : "text-gray-600 hover:bg-gray-100"
                            )}
                        >
                            {item.icon}
                            <span className="ml-3">{item.title}</span>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="p-4 border-t flex items-center">
                <div className="flex items-center justify-center">
                    <div className="text-xs text-gray-500">powered by</div>
                    <div className="ml-1 flex items-center">
                        <Link href={'/'} >
                            <Image src={'/company-logo.png'} alt="company logo" width={100} height={60} className="w-[50%] h-auto" ></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}