"use client";
import React, { useEffect, useRef } from "react";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }){
    const modalRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if(!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        modalRef.current?.focus();
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            document.removeEventListener("keydown", onKey);
        };
    }, [open, onClose]);

    if(!open) return null;


    const IconButton = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
        <a href={href} target={href.startsWith("mailto:") ? "_self" : "_blank"} rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded border">
            <span className="w-5 h-5">{children}</span>
            <span className="hidden md:inline-block">{label}</span>
        </a>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />
            <div ref={modalRef} role="dialog" aria-modal="true" tabIndex={-1} className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6 z-10">
                <h3 className="text-xl font-bold mb-4 text-green-600">Let's connect together!</h3>
                <p className="text-sm text-gray-600 mb-4">Reach out via any of the links below.</p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <IconButton href="mailto:a45han@uwaterloo.ca" label="Email">
                        <img src="icons/mail.svg" alt="Email"></img>
                    </IconButton>
                    <IconButton href="https://github.com/Pyrocarbine/" label="GitHub">
                        <img src="icons/github.svg" alt="Github"></img>
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/aaron-han-08ba55290/" label="LinkedIn">
                        <img src="icons/linkedin.svg" alt="LinkedIn"></img>
                    </IconButton>
                    <IconButton href="https://www.instagram.com/aaronhan06/" label="Instagram">
                        <img src="icons/instagram.svg" alt="Instagram"></img>
                    </IconButton>
                </div>
                <div className="mt-6 text-right">
                    <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                </div>
            </div>
        </div>
    );
}
