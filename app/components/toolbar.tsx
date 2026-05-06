"use client";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "./contactModal";
import React from "react";

export default function ToolBar(){

    const [open, setOpen] = React.useState(false);
    return (
    <div className="w-full overflow-x-auto">
        <div className="w-7/8 md:w-2/3 pt-2 flex flex-nowrap justify-start gap-10 ml-auto mr-auto sm:items-start">
            <Image src="/images/favicon.ico" className="rounded-lg" alt="Logo" width={64} height={64} />
            <Link href="#Projects_title" className="inline-block text-black mt-auto mb-auto font-bold text-3xl text-bold decoration-solid decoration-blue-300 decoration-4 underline underline-offset-6 cursor-pointer"> Projects </Link>
            <Link href="#Skills_title" className="inline-block text-black mt-auto mb-auto font-bold text-3xl text-bold decoration-solid decoration-blue-300 decoration-4 underline underline-offset-6 cursor-pointer"> Skills </Link>
            <button
                onClick={() => setOpen(true)}
                className="bg-green-400 mt-auto mb-auto ml-auto mr-auto xl:mr-0 font-bold text-3xl rounded-3xl cursor-pointer z-30 px-4 py-2"
            >
                <span className="text-white">Contact</span>
            </button>
        </div>
        <ContactModal open={open} onClose={() => setOpen(false)} />
    </div>);
}