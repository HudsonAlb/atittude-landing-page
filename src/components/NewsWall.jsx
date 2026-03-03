import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NewsWall.css';

const NewsWall = () => {
    const news = [
        { id: 1, icon: 'fa-bullhorn', text: 'Horário especial de feriado: 08:00 às 14:00 neste sábado.' },
        { id: 2, icon: 'fa-calendar-alt', text: 'Inauguração da nova área de Crossfit: Próximo dia 15!' },
        { id: 3, icon: 'fa-trophy', text: 'Desafio 30 Dias Atittude: Inscrições abertas na recepção.' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [news.length]);

    return (
        <section className="news-wall">
            <div className="container">
                <div className="news-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={news[currentIndex].id}
                            className="news-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <i className={`fas ${news[currentIndex].icon}`}></i>
                            <span>{news[currentIndex].text}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default NewsWall;
