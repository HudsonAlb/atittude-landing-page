import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-overlay"></div>
            <motion.div
                className="container hero-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1>ATITUDE GERA<br /><span>RESULTADOS</span></h1>
                <p>O ambiente que você precisa para alcançar sua melhor versão. Tecnologia, foco e comunidade.</p>
                <div className="hero-btns">
                    <a href="#plans" className="btn btn-primary btn-large">Começar Agora</a>
                    <a href="#features" className="btn btn-secondary btn-large">Conhecer a Unidade</a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
