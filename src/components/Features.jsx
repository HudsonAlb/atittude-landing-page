import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Área de Musculação',
        description: 'Equipamentos de última geração e espaço amplo para seu treino de força.',
        img: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1470&auto=format&fit=crop',
        col: 'md:col-span-2',
        row: 'h-[340px]',
    },
    {
        title: 'Crossfit',
        description: 'Box completo com profissionais certificados para levar seu limite ao máximo.',
        img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
        col: 'md:col-span-1',
        row: 'h-[340px]',
    },
    {
        title: 'Piscina Aquecida',
        description: 'Natação e hidroginástica em ambiente controlado e confortável.',
        img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1470&auto=format&fit=crop',
        col: 'md:col-span-1',
        row: 'h-[260px]',
    },
    {
        title: 'Estacionamento Grátis',
        description: 'Segurança e comodidade para você focar apenas no seu treino.',
        img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1470&auto=format&fit=crop',
        col: 'md:col-span-2',
        row: 'h-[260px]',
    },
];

const FeatureCard = ({ feature, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group relative overflow-hidden rounded-2xl ${feature.col} ${feature.row}`}
    >
        {/* Background image via div — mais confiável que <img absolute> */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${feature.img})` }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Texto */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-display text-2xl md:text-3xl text-white tracking-wider group-hover:text-[#ffcc00] transition-colors duration-300">
                {feature.title}
            </h3>
            <p className="text-zinc-300 text-sm mt-1 leading-relaxed overflow-hidden max-h-0 group-hover:max-h-16 transition-all duration-300">
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

            {/*
              Layout bento sem células vazias:
              Row 1: [Musculação: col-span-2] [Crossfit: col-span-1]
              Row 2: [Piscina: col-span-1]   [Estacionamento: col-span-2]
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                ))}
            </div>
        </div>
    </section>
);

export default Features;
