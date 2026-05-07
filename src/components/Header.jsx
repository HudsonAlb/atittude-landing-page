import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#features', label: 'Diferenciais' },
    { href: '#plans', label: 'Planos' },
    { href: '#gallery', label: 'Comunidade' },
    { href: '#contact', label: 'Contato' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
            isScrolled
                ? 'top-0 bg-black/80 backdrop-blur-lg border-b border-zinc-800'
                : 'top-8 bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#" className="font-display text-3xl tracking-widest text-white">
                    ATTI<span className="text-[#ffcc00]">TUDE</span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-sm font-semibold text-zinc-400 hover:text-[#ffcc00] transition-colors uppercase tracking-wider"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button
                        asChild
                        className="bg-[#ffcc00] text-[#121212] hover:bg-[#e6b800] font-bold uppercase tracking-wider"
                    >
                        <a href="#contact">Matricule-se</a>
                    </Button>
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white p-2"
                    aria-label="Menu"
                >
                    {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-lg border-t border-zinc-800 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map(({ href, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={closeMenu}
                                    className="text-lg font-semibold text-zinc-300 hover:text-[#ffcc00] transition-colors uppercase tracking-wider py-2 border-b border-zinc-800"
                                >
                                    {label}
                                </a>
                            ))}
                            <Button
                                asChild
                                className="mt-2 bg-[#ffcc00] text-[#121212] hover:bg-[#e6b800] font-bold uppercase tracking-wider w-full"
                            >
                                <a href="#contact" onClick={closeMenu}>Matricule-se</a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
