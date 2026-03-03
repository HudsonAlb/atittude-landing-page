import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Atittude Gym. Todos os direitos reservados.</p>
                    <div className="footer-logo">ATIT<span>TUDE</span></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
