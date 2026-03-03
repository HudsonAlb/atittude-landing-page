import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="container nav-wrapper">
                <div className="logo">
                    <a href="#">ATIT<span>TUDE</span></a>
                </div>
                <nav id="nav-menu" className={isMenuOpen ? 'active' : ''}>
                    <ul>
                        <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Diferenciais</a></li>
                        <li><a href="#plans" onClick={() => setIsMenuOpen(false)}>Planos</a></li>
                        <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Comunidade</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
                    </ul>
                </nav>
                <div className="header-cta">
                    <a href="#" className="btn btn-primary">Matricule-se</a>
                </div>
                <div className="mobile-menu-toggle" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
