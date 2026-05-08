import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
    { img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop', alt: 'Treino'    },
    { img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop', alt: 'Foco'      },
    { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', alt: 'Suor'      },
    { img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop', alt: 'Meta'      },
    { img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop', alt: 'Superação' },
    { img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop', alt: 'Resultado' },
];

const Gallery = () => (
    <section id="gallery" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <h2 className="font-display text-5xl md:text-6xl tracking-wider text-white">
                    NOSSA <span className="text-[#ffcc00]">COMUNIDADE</span>
                </h2>
                <div className="w-16 h-1 bg-[#ffcc00] mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, filter: 'grayscale(100%)' }}
                        whileInView={{ opacity: 1, filter: 'grayscale(50%)' }}
                        whileHover={{ filter: 'grayscale(0%)' }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-xl cursor-pointer h-[300px]"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${item.img})` }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white font-display text-2xl tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.alt.toUpperCase()}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Gallery;
