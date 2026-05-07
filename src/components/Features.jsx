import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Área de Musculação',
        description: 'Equipamentos de última geração e espaço amplo para seu treino de força.',
        img: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1470&auto=format&fit=crop',
        large: true,
    },
    {
        title: 'Crossfit',
        description: 'Box completo com profissionais certificados para levar seu limite ao máximo.',
        img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
    },
    {
        title: 'Piscina Aquecida',
        description: 'Natação e hidroginástica em ambiente controlado e confortável.',
        img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1470&auto=format&fit=crop',
    },
    {
        title: 'Estacionamento Grátis',
        description: 'Segurança e comodidade para você focar apenas no seu treino.',
        img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1470&auto=format&fit=crop',
    },
];

const FeatureCard = ({ feature, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group relative overflow-hidden rounded-2xl bg-zinc-900 ${
            feature.large ? 'md:col-span-2 md:row-span-2 min-h-[400px]' : 'min-h-[240px]'
        }`}
    >
        <img
            src={feature.img}
            alt={feature.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-display text-2xl text-white tracking-wider group-hover:text-[#ffcc00] transition-colors duration-300">
                {feature.title}
            </h3>
            <p className="text-zinc-400 text-sm mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                {feature.description}
            </p>
        </div>
    </motion.div>
);

const Features = () => (
    <section id="features" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <h2 className="font-display text-5xl md:text-6xl tracking-wider text-white">
                    POR QUE A <span className="text-[#ffcc00]">ATITTUDE</span>?
                </h2>
                <div className="w-16 h-1 bg-[#ffcc00] mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                ))}
            </div>
        </div>
    </section>
);

export default Features;
