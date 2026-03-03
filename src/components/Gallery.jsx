import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    const galleryItems = [
        { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', alt: 'Treino' },
        { img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop', alt: 'Suor' },
        { img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop', alt: 'Foco' },
        { img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop', alt: 'Meta' },
        { img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop', alt: 'Superação' },
        { img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop', alt: 'Resultado' }
    ];

    return (
        <section id="gallery" className="gallery section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>NOSSA <span>COMUNIDADE</span></h2>
                    <div className="line"></div>
                </motion.div>
                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, filter: 'grayscale(100%)' }}
                            whileInView={{ opacity: 1 }}
                            whileHover={{ filter: 'grayscale(0%)', scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <img src={item.img} alt={item.alt} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
