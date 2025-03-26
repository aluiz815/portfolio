"use client";

import { motion } from "framer-motion";
import Section from "../components/Section";
import Button from "../components/Button";

export default function About() {
    const skills = [
        "Apex", "LWC", "Flows", "Processos de aprovação", "Classe de testes Apex", "Rest API", "Git", "SOQL", "AmpScript"
        , "Copado", "Docker", "Responsive Design", "Javascript", "SSJS", "HTML", "CSS", "SQL", "Typescript", "TailwindCSS", "Next.JS",
        "Node.JS", "Express", "PostgreSQL", "Supabase", "Marketing Cloud", "Ecosistema Vlocity"
    ];

    return (
        <Section
            id="about"
            title="Sobre mim"
            subtitle="Conheça mais sobre mim e minha expertise técnica."
            className="bg-accent"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="text-2xl font-bold mb-4">
                        Desenvolvedor apaixonado que se aventura com IA as vezes
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        Eu sou um engenheri de software com mais de 4 anos de experiência construindo e suportando aplicacoes em salesforce e que se aventura em construir
                        aplicações web com tecnologias modernas. Minha jornada na engenharia de software começou com uma curiosidade
                        sobre como a web funciona, hardware e afins o que me levou a seguir uma carreira como desenvolvedor.
                    </p>
                    <p className="text-muted-foreground mb-6">
                        Eu sou especializo em construir e suportar aplicações salesforce responsivas, acessíveis e de alto desempenho
                        usando Apex, Omniscript, Lightning Web Components e toda sua stack de desenvolvimento,tambem já atuei como desenvolvedor/consultor marketing cloud e nos tempos livres
                        me aventuro outras tecnologias seja backend, frontend, mobile e afins.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <Button href="#contact">
                            Entre em contato
                        </Button>
                        <Button href="/download/resume.pdf" variant="outline">
                            Download Curriculo
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="text-2xl font-bold mb-6">Minhas Habilidades</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                className="px-4 py-2 bg-background rounded-full text-sm font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true, margin: "-10px" }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
} 