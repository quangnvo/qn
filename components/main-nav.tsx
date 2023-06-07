"use client"

import { useEffect, useState } from "react";
import { Collapse } from "@material-tailwind/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { ModeToggle } from "./mode-toggle";
import Logo from "./logo";


export default function NavBar() {

    const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false)
    const pathName = usePathname()
    const indexSecondSlashInPathName = pathName.indexOf("/", 1)
    if (indexSecondSlashInPathName > -1) {
        var pathNameNew = pathName.substring(0, indexSecondSlashInPathName)
    } else {
        var pathNameNew = pathName
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavbarMobileOpen(false)
        );
    }, []);

    interface NavBarButtonType {
        name: string,
        path: string
    }

    const renderNavbarButton = ({ name, path }: NavBarButtonType) => {
        return <li>
            <Link href={path}>
                <Button
                    variant="ghost"
                    className={` ${pathNameNew === path ? "font-bold text-lg" : "text-base"}   `}
                >
                    {name}
                </Button>
            </Link>
        </li>
    }

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
            {renderNavbarButton({ name: "Home", path: "/" })}
            {renderNavbarButton({ name: "Projects", path: "/projects" })}
        </ul>
    );

    return (
        <>
            <nav className="sticky inset-0 z-50 h-max rounded-none max-w-full shadow-md bg-opacity-80 backdrop-saturate-200 backdrop-blur-2xl bg-white border border-white/80 dark:bg-dark dark:border-none">
                <div className="container py-3 flex items-center justify-between">
                    {/* Left side */}
                    {/* Logo */}
                    <Logo />

                    {/* Right side */}
                    <div className="flex items-center gap-4">

                        {/* Render navlist */}
                        <div className=" hidden lg:block">
                            {navList}
                        </div>

                        {/* Dark mode */}
                        <ModeToggle />

                        {/* Icon Hamburger */}
                        <button
                            className="h-6 w-6 text-inherit lg:hidden dark:text-white"
                            onClick={() => { setIsNavbarMobileOpen(!isNavbarMobileOpen) }}
                        >
                            {isNavbarMobileOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Navbar on mobile */}
                <Collapse open={isNavbarMobileOpen}>
                    <div className="flex justify-center items-center text-center">
                        {navList}
                    </div>
                </Collapse>
            </nav>
        </>
    )
}