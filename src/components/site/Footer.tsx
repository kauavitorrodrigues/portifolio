"use client"

import { SocialIcon } from "@/types/SocialIcon"
import { Separator } from "../ui/separator"
import { SocialLink } from "./SocialLink"
import { SectionContent } from "../SectionContent"

export const Footer = () => {

    return (

        <footer className="flex gap-3 border h-40 items-center p-10 justify-between flex-col bg-card min-h-96">

            <div className="">

                <h1 className="font-semibold text-4xl">Let's Talk</h1>
                <h2 className="text-primary font-semibold text-lg">Contact Info</h2>
                <p>kvrfz.prsnl@gmail.com</p>

            </div>

            <Separator/>

            <div className="flex flex-col w-full items-center justify-center gap-7">

                <div className="flex gap-2">
                    { SocialIcons.map((icon, index) => (
                        <SocialLink 
                            key={index} 
                            icon={icon.icon} 
                            link={icon.link}
                        />
                    ))}
                </div>

                <div className="text-muted-foreground text-sm">
                    <p>© 2024 Kauã Vitor. All rights reserved.</p>
                </div>

            </div>

        </footer>

    )

}

const SocialIcons: SocialIcon[] = [
    {
        icon: "assets/logos/instagram.svg",
        link: "https://www.instagram.com/kauavferraz/"
    },
    {
        icon: "assets/logos/linkedin.svg",
        link: "https://www.linkedin.com/in/kauavitor/"
    },
    {
        icon: "assets/logos/github.svg",
        link: "https://github.com/kauavitorrodrigues"
    },
]