"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

export default function Section({
    id,
    title,
    subtitle,
    children,
    className = "",
}: SectionProps) {
    return (
        <section
            id={id}
            className={`py-20 md:py-32 ${className}`}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
                </motion.div>

                {children}
            </div>
        </section>
    );
} 