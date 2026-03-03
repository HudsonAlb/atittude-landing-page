import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
    const featureList = [
        {
            title: 'Área de Musculação',
            description: 'Equipamentos de última geração e espaço amplo para seu treino de força.',
            img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop'
        },
        {
            title: 'Crossfit',
            description: 'Box completo com profissionais certificados para levar seu limite ao máximo.',
            img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop'
        },
        {
            title: 'Piscina Aquecida',
            description: 'Natação e hidroginástica em ambiente controlado e confortável.',
            img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1470&auto=format&fit=crop'
        },
        {
            title: 'Estacionamento Grátis',
            description: 'Segurança e comodidade para você focar apenas no seu treino.',
            img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1470&auto=format&fit=crop'
        }
    ];

    return (
        <section id="features" className="features section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>POR QUE A <span>ATITTUDE</span>?</h2>
                    <div className="line"></div>
                </motion.div>
                <div className="grid grid-features">
                    {featureList.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="feature-img">
                                <img src={feature.img} alt={feature.title} />
                            </div>
                            <div className="feature-info">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
