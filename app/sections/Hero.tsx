"use client";

import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20"
        >
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                            Software Engineer
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Criando e transformando <br />
                        <span className="text-primary">Experiências Digitais</span>
                    </motion.h1>

                    <motion.p
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Olá, me chamo André e sou engenheiro de software focado atualmente em salesforce, porém como hobby gosto de construir
                        aplicações que são rápidas, acessíveis e construídas com as melhores práticas.
                        Sempre focado em criar experiências de usuário atraentes através de design limpo e código eficiente.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button href="#projects" size="lg">
                            Empresas que atuei
                        </Button>
                        <Button href="#contact" variant="outline" size="lg">
                            Entrar em contato
                        </Button>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-muted-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 