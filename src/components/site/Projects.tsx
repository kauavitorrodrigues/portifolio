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
        description: "FLOWE is an exclusive professional club focused on innovation and technology. The initiative is designed to develop talent and connect them with companies seeking high-performance professionals. Through a structured and strategic approach, it aligns individual skills and goals with the real demands of the market.",
        cover: "assets/projects/flowe.png",
        link: "https://flowehub.com/"
    },
    {
        title: "Project 2",
        description: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
        cover: "https://images.pexels.com/photos/29078815/pexels-photo-29078815/free-photo-of-passeio-panoramico-de-teleferico-sobre-paisagens-montanhosas-acidentadas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.google.com"
    },
    {
        title: "Project 3",
        description: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
        cover: "https://images.pexels.com/photos/29508060/pexels-photo-29508060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.google.com"
    },
    {
        title: "Project 4",
        description: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
        cover: "https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.google.com"
    }
];