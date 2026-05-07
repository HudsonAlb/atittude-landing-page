import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const infoItems = [
    {
        icon: MapPin,
        label: 'Localização',
        /* TODO: substituir pelo endereço real da academia */
        lines: ['Av. Atitude, 1000 - Centro, Recife - PE'],
    },
    {
        icon: Phone,
        label: 'WhatsApp',
        lines: ['(81) 7305-2157'],
    },
    {
        icon: Clock,
        label: 'Horário',
        lines: ['Seg - Sex: 05h às 23h | Sáb: 08h às 18h'],
    },
];

const socialLinks = [
    {
        href: 'https://www.instagram.com/attitude_academia/',
        label: 'Instagram',
        target: '_blank',
        svg: <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    },
    {
        /* TODO: substituir href pela URL real do Facebook */
        href: '#',
        label: 'Facebook',
        svg: <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    },
    {
        /* TODO: substituir href pela URL real do YouTube */
        href: '#',
        label: 'YouTube',
        svg: <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
    },
];

const Contact = ({ selectedPlan }) => {
    const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (selectedPlan) {
            setFormData(prev => ({
                ...prev,
                message: `Olá! Gostaria de mais informações sobre o plano ${selectedPlan}.`,
            }));
        }
    }, [selectedPlan]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = '558173052157';
        const text =
            `*Novo Pedido de Contato - Atittude Academia*\n\n` +
            `*Nome:* ${formData.name}\n` +
            `*E-mail:* ${formData.email}\n` +
            `*WhatsApp:* ${formData.whatsapp}\n` +
            `*Mensagem:* ${formData.message}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', whatsapp: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 bg-[#121212]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="font-display text-5xl md:text-6xl tracking-wider text-white">
                        VEM PRA <span className="text-[#ffcc00]">ATITTUDE</span>
                    </h2>
                    <div className="w-16 h-1 bg-[#ffcc00] mx-auto mt-4" />
                </motion.div>

                {/* Card único unificado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12"
                >
                    {/* Coluna de info — 2 das 5 colunas */}
                    <div className="lg:col-span-2 flex flex-col gap-7">
                        {infoItems.map(({ icon: Icon, label, lines }) => (
                            <div key={label} className="flex items-start gap-4">
                                <div className="size-10 rounded-full bg-[#ffcc00] flex items-center justify-center shrink-0">
                                    <Icon className="size-5 text-[#121212]" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">{label}</h4>
                                    {lines.map((line, i) => (
                                        <p key={i} className="text-zinc-400 text-sm">{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="flex gap-3 mt-2">
                            {socialLinks.map(({ href, label, svg, target }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={target}
                                    rel={target ? 'noopener noreferrer' : undefined}
                                    aria-label={label}
                                    className="size-10 rounded-full bg-zinc-800 hover:bg-[#ffcc00] hover:text-[#121212] text-zinc-400 flex items-center justify-center transition-all duration-200"
                                >
                                    {svg}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Formulário — 3 das 5 colunas */}
                    <form
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 flex flex-col gap-4"
                    >
                        <Input
                            name="name"
                            placeholder="Seu Nome"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-[#ffcc00] focus-visible:border-[#ffcc00] h-12"
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Seu E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-[#ffcc00] focus-visible:border-[#ffcc00] h-12"
                        />
                        <Input
                            name="whatsapp"
                            placeholder="Seu WhatsApp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            required
                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-[#ffcc00] focus-visible:border-[#ffcc00] h-12"
                        />
                        <Textarea
                            name="message"
                            placeholder="Sua Mensagem / Objetivo (Ex: Emagrecimento, Hipertrofia...)"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-[#ffcc00] focus-visible:border-[#ffcc00] min-h-[140px] resize-none"
                        />
                        <Button
                            type="submit"
                            disabled={submitted}
                            className="w-full h-12 bg-[#ffcc00] text-[#121212] hover:bg-[#e6b800] font-bold uppercase tracking-widest text-base shadow-[0_0_20px_rgba(255,204,0,0.2)] mt-1"
                        >
                            {submitted ? 'Redirecionando para o WhatsApp...' : 'Enviar Pedido'}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
