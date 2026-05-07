import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => (
    <footer className="bg-[#0a0a0a] py-8 px-6">
        <div className="max-w-7xl mx-auto">
            <Separator className="bg-zinc-800 mb-8" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} Atittude Academia. Todos os direitos reservados.
                </p>
                <span className="font-display text-2xl tracking-widest text-zinc-500">
                    ATTI<span className="text-[#ffcc00]">TUDE</span>
                </span>
            </div>
        </div>
    </footer>
);

export default Footer;
