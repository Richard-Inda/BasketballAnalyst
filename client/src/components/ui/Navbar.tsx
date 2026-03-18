import React from 'react'
import Link from 'next/link'
import { Button } from './button'
import { User, HomeIcon } from 'lucide-react'
import { ModeToggle } from './DarkModeToggle'

function Navbar() {
    return (
        <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="max-w-7x1 mx-auto px-4">

                <div className="flex item-center h-16 justify-between ">

                    {/*Logo*/}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-primary font-mono tracking-wider"
                        >
                            🏀 Fantasy Analyst
                        </Link>
                    </div>

                    {/*Navbar Components*/}

                    <div className="hiddent md:flex items-center space-x-4">

                        <Button variant="ghost" className="flex item-center gap-2 asChild>">
                            <Link href="/">
                                <HomeIcon className="w-4 h-4" />
                                <span className="hidden lg:inline">Home</span>
                            </Link>
                        </Button>

                        <Button variant="ghost" className="flex item-center gap-2 asChild>">
                            <Link href="/players">
                                <User className="w-4 h-4" />
                                <span className="hidden lg:inline">Players</span>
                            </Link>
                        </Button>

                        <ModeToggle />
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default Navbar