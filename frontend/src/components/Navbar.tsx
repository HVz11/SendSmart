import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <Link href="/" className="text-xl font-bold">
                SendSmart
            </Link>
            <div>
                <Link href="/auth/signup">
                    <Button>Sign Up</Button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;