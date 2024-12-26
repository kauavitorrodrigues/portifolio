import { Project } from "@/types/Project";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

    return (

        <div className="grid grid-cols-2 gap-10">

            { ProjectsList.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title} 
                    description={project.description}
                    cover={project.cover}
                    link={project.link}
                />
            ))}

        </div>

    )

}

const ProjectsList: Project[] = [
    {
        title: "FLOWE",
        description: "FLOWE is a professional club focused on innovation and technology, designed to develop talent and connect professionals with companies seeking high-performance individuals.",
        cover: "assets/projects/flowe.png",
        link: "https://flowehub.com/"
    },
    {
        title: "Personal Portfolio",
        description: "This project is a portfolio landing page, focusing on planning the structure, organizing sections, and creating a professional design to clearly highlight projects, skills, and experiences.",
        cover: "assets/projects/simple-portifolio.png",
        link: "https://smple-portifolio.vercel.app/"
    },
    {
        title: "Gesconver",
        description: "The ERP/CRM system at GESCONVER was enhanced with new features and performance optimizations, improving user experience and better meeting client needs.",
        cover: "assets/projects/gesconver.png",
        link: "https://gesconver.com.br/"
    },
    {
        title: "SearchX",
        description: "SearchX continuously monitors data leaks, compares them to personal information, and alerts users if their data is compromised. It also provides OSINT tools to help protect privacy.",
        cover: "assets/projects/searchx.png",
        link: "/"
    }
];