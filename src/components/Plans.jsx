import React from 'react';
import { motion } from 'framer-motion';
import './Plans.css';

const Plans = () => {
    const plansList = [
        {
            name: 'BASIC',
            price: '99,90',
            features: [
                { text: 'Musculação Completa', included: true },
                { text: 'Aulas Coletivas', included: true },
                { text: 'Acesso à Piscina', included: false },
                { text: 'Convidado Ilimitado', included: false },
            ]
        },
        {
            name: 'PRO',
            price: '149,90',
            featured: true,
            features: [
                { text: 'Musculação + Crossfit', included: true },
                { text: 'Acesso à Piscina', included: true },
                { text: 'Armário Exclusivo', included: true },
                { text: 'Convidado Ilimitado', included: false },
            ]
        },
        {
            name: 'PLATINUM',
            price: '199,90',
            features: [
                { text: 'Acesso Total & VIP', included: true },
                { text: 'Personal Trainer Individual', included: true },
                { text: 'Toalhas e Amenities', included: true },
                { text: 'Convidado Ilimitado', included: true },
            ]
        }
    ];

    return (
        <section id="plans" className="plans section-padding bg-darker">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>ESCOLHA SEU <span>DESAFIO</span></h2>
                    <div className="line"></div>
                </motion.div>
                <div className="grid grid-plans">
                    {plansList.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`plan-card ${plan.featured ? 'featured' : ''}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: plan.featured ? 1.05 : 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {plan.featured && <div className="tag">MAIS POPULAR</div>}
                            <h3>{plan.name}</h3>
                            <div className="price">R$ <span>{plan.price.split(',')[0]}</span>,{plan.price.split(',')[1]}/mês</div>
                            <ul>
                                {plan.features.map((feat, i) => (
                                    <li key={i}>
                                        <i className={`fas ${feat.included ? 'fa-check' : 'fa-times'}`}></i>
                                        {feat.text}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}>Escolher</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
