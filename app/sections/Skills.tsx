"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "../components/Section";

interface Skill {
    name: string;
    progress: number;
    color: string;
    icon: string;
}

interface Category {
    name: string;
    skills: Skill[];
}

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const categories: Category[] = [
        {
            name: "Frontend",
            skills: [
                { name: "HTML & CSS", progress: 95, color: "bg-[#e34c26]", icon: "💻" },
                { name: "JavaScript", progress: 90, color: "bg-[#f0db4f]", icon: "🟨" },
                { name: "React", progress: 70, color: "bg-[#61dafb]", icon: "⚛️" },
                { name: "Next.js", progress: 50, color: "bg-[#000000]", icon: "▲" },
                { name: "TailwindCSS", progress: 85, color: "bg-[#38b2ac]", icon: "🌊" },
            ],
        },
        {
            name: "Backend",
            skills: [
                { name: "Node.js", progress: 85, color: "bg-[#339933]", icon: "🟢" },
                { name: "Express", progress: 50, color: "bg-[#000000]", icon: "🚂" },
                { name: "MongoDB", progress: 50, color: "bg-[#47a248]", icon: "🍃" },
                { name: "PostgreSQL", progress: 75, color: "bg-[#336791]", icon: "🐘" },
                { name: "Supabase", progress: 65, color: "bg-[#f0db4f]", icon: "⚛️" },
            ],
        },
        {
            name: "Salesforce",
            skills: [
                { name: "LWC", progress: 85, color: "bg-[#e535ab]", icon: "🌊" },
                { name: "Apex", progress: 80, color: "bg-[#f0db4f]", icon: "⚛️" },
                { name: "Vlocity", progress: 60, color: "bg-[#8956FF]", icon: "🚂" },
                { name: "Flow", progress: 65, color: "bg-[#f05032]", icon: "💻" },
                { name: "Rest API", progress: 95, color: "bg-[#47a248]", icon: "🍃" },
                { name: "AmpScript", progress: 95, color: "bg-[#7b68ee]", icon: "📱" },
            ],
        },
        {
            name: "Outras",
            skills: [
                { name: "Git & GitHub", progress: 100, color: "bg-[#f05032]", icon: "🔄" },
                { name: "Docker", progress: 75, color: "bg-[#2496ed]", icon: "🐳" },
                { name: "Copado", progress: 50, color: "bg-[#7b68ee]", icon: "📱" },
            ],
        },
    ];

    return (
        <Section
            id="skills"
            title="Habilidades técnicas"
            subtitle="Uma lista completa de minhas habilidades técnicas e proficiências."
            className="bg-accent"
        >
            <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {categories.map((category, catIndex) => (
                    <motion.div
                        key={category.name}
                        className="bg-card p-4 md:p-6 rounded-lg border border-border shadow-sm"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h3 className="text-xl font-bold mb-4 md:mb-6 text-center">{category.name}</h3>
                        <div className="space-y-4 md:space-y-6">
                            {category.skills.map((skill, index) => {
                                const delay = index * 0.05 + catIndex * 0.1;

                                return (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="mr-2">{skill.icon}</span>
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {skill.progress}%
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-accent rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full ${skill.color}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.progress}%` }}
                                                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                                                viewport={{ once: true, margin: "-10px" }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="text-center mt-12 md:mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <p className="text-muted-foreground">
                    Estou sempre expandindo meu conjunto de habilidades e me mantendo atualizado com as últimas tecnologias.
                </p>
            </motion.div>
        </Section>
    );
} 