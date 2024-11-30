import { Camera, Layout, Settings, Users } from "lucide-react";
import { ReactNode } from "react";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

type Props = {
    title: string;
    description: string;
    icon: ReactNode;
}

export const ServiceCard = ({ title, description, icon } : Props ) => {

    return (

        <motion.div

            whileHover={{
                scale: 1.1, // Aumenta o card
                rotate: 2, // Dá uma leve rotação
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)", // Adiciona sombra ao hover
            }}
            transition={{
                duration: 0.3, // Duração da animação
                type: "spring", // Tipo de transição suave
                stiffness: 200, // Define a elasticidade
            }}
            className="rounded-lg"

        >

            <Card className="w-64 h-64 p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-300">

                <div className="flex flex-col items-center space-y-4">

                    <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                        {icon}
                    </div>
                    
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>

                </div>

            </Card>

        </motion.div>

    );

}

type Service = {
    title: string;
    description: string;
    icon: ReactNode;
}

export const Services: Service[] = [
    {
        title: "Web Development",
        description: "I can create websites that are both visually appealing and functional.",
        icon: <Layout/>
    },
    {
        title: "UI/UX Design",
        description: "I can create user interfaces that are both visually appealing and functional.",
        icon: <Users/>
    },
    {
        title: "SEO",
        description: "I can help your website rank higher and reach more users online.",
        icon: <Settings/>
    },
    {
        title: "Visual Content Creation",
        description: "I can create marketing videos and branding assets to enhance your visual identity.",
        icon: <Camera/>
    }
]