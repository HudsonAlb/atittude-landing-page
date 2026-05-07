import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone } from 'lucide-react';

const news = [
    { id: 1, text: 'Horário especial de feriado: 08:00 às 14:00 neste sábado.' },
    { id: 2, text: 'Inauguração da nova área de Crossfit: Próximo dia 15!' },
    { id: 3, text: 'Desafio 30 Dias Atittude: Inscrições abertas na recepção.' },
];

const NewsWall = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-[#ffcc00] text-[#121212] py-2 px-4 z-50 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-semibold">
                <Megaphone className="size-4 shrink-0" />
                <AnimatePresence mode="wait">
                    <motion.span
                        key={news[currentIndex].id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="text-center"
                    >
                        {news[currentIndex].text}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NewsWall;
