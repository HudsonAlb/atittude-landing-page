import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#0a0a0a]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col items-center gap-8"
                >
                    <Badge
                        className="gap-1.5 bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/30 hover:bg-[#ffcc00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                    >
                        <Zap className="size-3 fill-[#ffcc00]" />
                        Nova turma aberta
                    </Badge>

                    <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wider text-white">
                        ATITUDE GERA<br />
                        <span className="text-[#ffcc00]">RESULTADOS</span>
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                        O ambiente que você precisa para alcançar sua melhor versão.
                        Tecnologia, foco e comunidade.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <Button
                            asChild
                            size="lg"
                            className="bg-[#ffcc00] text-[#121212] hover:bg-[#e6b800] font-bold uppercase tracking-widest text-base h-12 px-8 shadow-[0_0_30px_rgba(255,204,0,0.3)]"
                        >
                            <a href="#plans">
                                Começar Agora
                                <ArrowRight className="size-4" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:text-white font-bold uppercase tracking-widest text-base h-12 px-8 backdrop-blur-sm"
                        >
                            <a href="#features">Conhecer a Unidade</a>
                        </Button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffcc00]" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
