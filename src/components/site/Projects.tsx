import { Project } from "@/types/Project";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

    return (

        <div className="flex flex-col gap-10">

            { ProjectsList.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title} 
                    description={project.description}
                    cover={project.cover}
                    link={project.link}
                    skills={project.skills}
                    cardPosition={project.cardPosition}
                />
            ))}

        </div>

    )

}

const ProjectsList: Project[] = [
    {
        title: "FLOWE",
        description: "FLOWE is a professional club focused on innovation and technology. Its main goal is to empower talent and create meaningful connections between professionals and companies seeking high-performance individuals. Additionally, the platform offers opportunities for networking, career development, and collaborative projects, establishing itself as a hub of innovation in the current market.",
        cover: "assets/projects/flowe.png",
        link: "https://flowehub.com/",
        skills: ["ReactJs", "NextJs", "TailwindCSS", "Figma", "Git", "UX", "UI"],
        cardPosition: "left",
    },
    {
        title: "Personal Portfolio",
        description: "This project is a portfolio landing page designed to clearly and efficiently showcase a professional's projects, skills, and experiences. The focus is on structuring the layout, organizing sections, and creating a professional design. It features a responsive presentation, with special attention to usability and aesthetics, ensuring a smooth navigation experience for visitors and recruiters.",
        cover: "assets/projects/simple-portifolio.png",
        link: "https://smple-portifolio.vercel.app/",
        skills: ["HTML", "CSS", "JavaScript", "UX", "UI"],
        cardPosition: "right",
    },
    {
        title: "Gesconver",
        description: "The ERP/CRM system at GESCONVER was enhanced with the implementation of new features and performance optimizations. These improvements aimed to increase operational efficiency, provide a smoother user experience, and better meet clients' specific needs. The project also involved resolving existing technical issues and introducing functionalities focused on scalability and integration.",
        cover: "assets/projects/gesconver.png",
        link: "https://gesconver.com.br/",
        skills: ["System Development", "ERP", "CRM", "Performance Optimization", "System Integration"],
        cardPosition: "left",
    }
];