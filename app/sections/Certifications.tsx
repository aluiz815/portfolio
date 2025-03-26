"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Section from "../components/Section";
import Image from "next/image";

interface Certification {
    title: string;
    issuer: string;
    date: string;
    image: string;
    link: string;
}

export default function Certifications() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const certifications: Certification[] = [
        {
            title: "Salesforce Marketing Cloud Email Specialist",
            issuer: "Salesforce",
            date: "Dezembro 2021",
            image: "/images/mkt.png",
            link: "https://www.salesforce.com/trailblazer/andev3",
        },
        {
            title: "Salesforce Certified Platform Developer I",
            issuer: "Salesforce",
            date: "Dezembro 2022",
            image: "/images/pd1.png",
            link: "https://www.salesforce.com/trailblazer/andev3",
        },
        {
            title: "Salesforce Certified JavaScript Developer I",
            issuer: "Salesforce",
            date: "Junho 2023",
            image: "/images/js.png",
            link: "https://www.salesforce.com/trailblazer/andev3",
        },
        {
            title: "Salesforce Certified Associate",
            issuer: "Salesforce",
            date: "Maio 2023",
            image: "/images/associate.png",
            link: "https://www.salesforce.com/trailblazer/andev3",
        },
    ];

    return (
        <Section
            id="certifications"
            title="Certificações Salesforce"
            subtitle="Minhas certificações oficiais no ecossistema Salesforce"
            className="bg-background"
        >
            <div
                ref={sectionRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.title}
                        className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ y: -5 }}
                    >
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full"
                        >
                            <div className="flex items-center mb-4">
                                <div className="relative w-16 h-16 mr-4 overflow-hidden">
                                    <Image
                                        src={cert.image}
                                        alt={`${cert.issuer} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">{cert.date}</span>
                                <motion.span
                                    className="text-primary text-sm"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    Ver credencial →
                                </motion.span>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <p className="text-muted-foreground">
                    Estou constantemente ampliando meus conhecimentos e certificações no ecossistema Salesforce.
                </p>
            </motion.div>
        </Section>
    );
} 