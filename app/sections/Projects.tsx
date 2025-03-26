"use client";

import { motion } from "framer-motion";
import Section from "../components/Section";
import Button from "../components/Button";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    siteUrl: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            id: 1,
            title: "OSF Digital",
            description: "Criando e transformando a forma de enviar e receber emails com o marketing cloud para grandes companhias como Itau, Elgin e afins",
            tags: ["Ampscript", "Javascript", "SSJS", "HTML", "CSS", "SQL"],
            image: "https://osf.digital/library/media/osf/digital/modules/social-media-images/homepage-sm.jpg",
            siteUrl: "https://osf.digital",
        },
        {
            id: 2,
            title: "IBM BRASIL",
            description: "Criando e suportando features para um dos clientes da IBM Brasil atuando no squad financeiro do cliente.",
            tags: ["Apex", "LWC", "Ecosistema Vlocity", "Flows", "Processos de aprovação", "Classe de testes Apex", "Rest API", "Copado", "Git", "SOQL"],
            image: "https://pbs.twimg.com/profile_images/1679592872587272192/2pBkq8DO_400x400.jpg",
            siteUrl: "https://www.ibm.com/br-pt",
        },
        {
            id: 3,
            title: "Platform Builders",
            description: "Atualmente empresa onde trabalho, desenvolvendo soluções com o ecosistema salesforce.",
            tags: ["Apex", "LWC", "Flows", "Processos de aprovação", "Classe de testes Apex", "Rest API", "Git", "SOQL"],
            image: "https://cdn.prod.website-files.com/6479ea7e59385283184b5958/669951a6d930f821ee499ebd_Thumbnail-Logo-Builders.webp",
            siteUrl: "https://www.platformbuilders.io/",
        },
    ];

    return (
        <Section
            id="projects"
            title="Empresas que já trabalhei"
            subtitle="Confira algumas das empresas que já trabalhei."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="bg-card rounded-lg overflow-hidden border border-border shadow-sm"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="relative h-52 w-full">
                            <Image src={project.image} alt={project.title} fill className="object-fill" />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-10">
                                <div className="flex">
                                    <a
                                        href={project.siteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
                                    >
                                        Visitar Website
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-accent rounded-full text-xs font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <Button href="https://www.linkedin.com/in/andr%C3%A9-luiz-90126716a/" variant="outline" size="lg">
                    Veja mais no Linkedin
                </Button>
            </motion.div>
        </Section>
    );
} 