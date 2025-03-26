"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Button from "../components/Button";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            // Reset the success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1500);
    };

    const contactMethods = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            value: "aluizdev@gmail.com",
            link: "mailto:aluizdev@gmail.com",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Telefone",
            value: "+55 (81) 98250-5544",
            link: "tel:+5581982505544",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Localizacao",
            value: "Recife, PE",
            link: "https://maps.google.com",
        },
    ];

    return (
        <Section
            id="contact"
            className="bg-accent"
            title="Entre em contato"
            subtitle="Tem alguma proposta de emprego ? Vamos trabalhar juntos."
        >
            <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="text-2xl font-bold mb-6">Vamos conversar</h3>
                    <p className="text-muted-foreground mb-8">
                        Estou sempre aberto a discutir sobre novas oportunidades.
                    </p>

                    <div className="space-y-6">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.title}
                                href={method.link}
                                className="flex items-center p-4 rounded-lg border border-border hover:bg-accent transition-colors"
                                target={method.title === "Location" ? "_blank" : undefined}
                                rel={method.title === "Location" ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                                    {method.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold">{method.title}</h4>
                                    <p className="text-muted-foreground text-sm">{method.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                        <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>

                        {isSubmitted ? (
                            <motion.div
                                className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <h4 className="text-lg font-bold">Mensagem enviada!</h4>
                                <p className="text-muted-foreground">Obrigado por entrar em contato. Eu vou te responder o mais rápido possível.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm mb-1">Nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm mb-1">Assunto</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm mb-1">Mensagem</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground resize-none"
                                    />
                                </div>

                                {error && (
                                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-500">
                                        {error}
                                    </div>
                                )}

                                <Button type="submit" disabled={isSubmitting} className="w-full">
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : (
                                        "Enviar mensagem"
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
} 