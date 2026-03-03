import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Obrigado pelo contato! Nossa equipe entrará em contato em breve.');
        e.target.reset();
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
                            <a href="#"><i className="fab fa-instagram"></i></a>
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
                            <input type="text" placeholder="Seu Nome" required />
                        </div>
                        <div className="input-group">
                            <input type="email" placeholder="Seu E-mail" required />
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Seu WhatsApp" required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Enviar Pedido</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
