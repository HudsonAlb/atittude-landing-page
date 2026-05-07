import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const plansList = [
    {
        name: 'BASIC',
        price: '99',
        cents: '90',
        features: [
            { text: 'Musculação Completa', included: true },
            { text: 'Aulas Coletivas', included: true },
            { text: 'Acesso à Piscina', included: false },
            { text: 'Convidado Ilimitado', included: false },
        ],
    },
    {
        name: 'PRO',
        price: '149',
        cents: '90',
        featured: true,
        features: [
            { text: 'Musculação + Crossfit', included: true },
            { text: 'Acesso à Piscina', included: true },
            { text: 'Armário Exclusivo', included: true },
            { text: 'Convidado Ilimitado', included: false },
        ],
    },
    {
        name: 'PLATINUM',
        price: '199',
        cents: '90',
        vip: true,
        features: [
            { text: 'Acesso Total & VIP', included: true },
            { text: 'Personal Trainer Individual', included: true },
            { text: 'Toalhas e Amenities', included: true },
            { text: 'Convidado Ilimitado', included: true },
        ],
    },
];

const Plans = ({ onSelectPlan }) => (
    <section id="plans" className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <h2 className="font-display text-5xl md:text-6xl tracking-wider text-white">
                    ESCOLHA SEU <span className="text-[#ffcc00]">DESAFIO</span>
                </h2>
                <div className="w-16 h-1 bg-[#ffcc00] mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {plansList.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col ${plan.featured ? 'md:-translate-y-4' : ''}`}
                    >
                        {(plan.featured || plan.vip) && (
                            <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                                {plan.featured && (
                                    <Badge className="bg-[#ffcc00] text-[#121212] font-bold uppercase tracking-widest text-xs px-4 py-1">
                                        Mais Popular
                                    </Badge>
                                )}
                                {plan.vip && (
                                    <Badge className="bg-gradient-to-r from-zinc-400 to-zinc-200 text-[#121212] font-bold uppercase tracking-widest text-xs px-4 py-1">
                                        VIP
                                    </Badge>
                                )}
                            </div>
                        )}
                        <Card className={`flex flex-col h-full bg-zinc-900 border ${
                            plan.featured
                                ? 'border-[#ffcc00] shadow-[0_0_40px_rgba(255,204,0,0.15)]'
                                : plan.vip
                                ? 'border-zinc-400 shadow-[0_0_30px_rgba(192,192,192,0.08)]'
                                : 'border-zinc-800'
                        } rounded-2xl pt-10`}>
                            <CardHeader className="pb-2 px-8">
                                <p className="font-display text-3xl tracking-[0.2em] text-white">{plan.name}</p>
                                <div className="flex items-end gap-1 mt-2">
                                    <span className="text-zinc-400 text-lg">R$</span>
                                    <span className="font-display text-6xl text-[#ffcc00] leading-none">{plan.price}</span>
                                    <span className="text-zinc-400 text-lg mb-1">,{plan.cents}/mês</span>
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1 px-8 py-6">
                                <ul className="space-y-3">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            {feat.included ? (
                                                <Check className="size-4 text-emerald-400 shrink-0" />
                                            ) : (
                                                <X className="size-4 text-zinc-600 shrink-0" />
                                            )}
                                            <span className={feat.included ? 'text-zinc-200' : 'text-zinc-600'}>
                                                {feat.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="px-8 pb-8">
                                <Button
                                    onClick={() => onSelectPlan(plan.name)}
                                    className={`w-full h-11 font-bold uppercase tracking-widest ${
                                        plan.featured
                                            ? 'bg-[#ffcc00] text-[#121212] hover:bg-[#e6b800] shadow-[0_0_20px_rgba(255,204,0,0.3)]'
                                            : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                                    }`}
                                >
                                    Escolher Plano
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Plans;
