import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = ({ selectedPlan }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (selectedPlan) {
            setFormData(prev => ({
                ...prev,
                message: `Olá! Gostaria de mais informações sobre o plano ${selectedPlan}.`
            }));
        }
    }, [selectedPlan]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // WhatsApp configuration
        const phoneNumber = '558173052157'; // Replaced with a generic BR number, user can change
        const text = `*Novo Pedido de Contato - Atittude Academia*\n\n` +
            `*Nome:* ${formData.name}\n` +
            `*E-mail:* ${formData.email}\n` +
            `*WhatsApp:* ${formData.whatsapp}\n` +
            `*Mensagem:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Show success state
        setSubmitted(true);

        // Reset form after a delay
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                whatsapp: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>VEM PRA <span>ATITTUDE</span></h2>
                    <div className="line"></div>
                </motion.div>
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Localização</h4>
                                <p>Av. Atitude, 1000 - Centro, São Paulo - SP</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h4>WhatsApp</h4>
                                <p>(11) 98765-4321</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <div>
                                <h4>Horário</h4>
                                <p>Seg - Sex: 05h às 23h | Sáb: 08h às 18h</p>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://www.instagram.com/attitude_academia/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu Nome"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Seu E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="whatsapp"
                                placeholder="Seu WhatsApp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                name="message"
                                placeholder="Sua Mensagem / Objetivo (Ex: Emagrecimento, Hipertrofia...)"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" disabled={submitted}>
                            {submitted ? 'Pedido Enviado!' : 'Enviar Pedido'}
                        </button>
                        {submitted && (
                            <motion.p
                                className="success-message"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                Redirecionando para o WhatsApp...
                            </motion.p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
