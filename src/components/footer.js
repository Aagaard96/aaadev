import Link from 'next/link'
import React from 'react'
import { MdOutlineLocalPhone, MdOutlineMailOutline } from 'react-icons/md'

export default function Footer() {
    return (
        <div id='contact' className="flex flex-col justify-between text-accentGreen h-[200px] container pt-10 pb-5">
            <div className=''>
                <Link
                    href="mailto:andreas@aaadev.dk"
                    className="hover:text-accent flex items-center gap-1"
                >
                    <span className="text-accent text-xl">
                        <MdOutlineMailOutline />
                    </span>
                    Andreas@aaadev.dk
                </Link>
                <Link
                    href="tel:+4528456961"
                    className="hover:text-accent flex items-center gap-1"
                >
                    <span className="text-accent text-xl">
                        <MdOutlineLocalPhone />
                    </span>
                    +45 2845 6961
                </Link>
            </div>
            <div className="text-center text-baseText text-sm pb-1">
                <Link
                    target="_blank"
                    className="hover:underline hover:text-accent"
                    href="https://aaadev.dk"
                >
                    Hosted by AAA Dev. &copy;
                </Link>
            </div>
        </div>
    )
}
