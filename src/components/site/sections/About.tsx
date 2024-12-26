"use client"

import { Button } from "../Button";
import animationData from "../../../../public/assets/animations/website.json";
import Lottie from "lottie-react";
import { SectionContent } from "@/components/SectionContent";

export const About = () => {

    return (

        <section id="about" className="p-20 bg-card flex gap-10 justify-center min-h-screen items-center">

            <SectionContent>
                
                <div className="w-full max-w-7xl flex items-center justify-center">

                    <div className="flex justify-between gap-6 w-1/2">

                        <div className="flex flex-col gap-6">

                            <p className="scroll-m-20 text-2xl font-semibold tracking-tight">ABOUT ME</p>
                            
                            <p className="text-lg leading-7">
                                I’m a 19-year-old developer focused on web development,
                                working as a freelancer since 2023. Throughout my time as
                                a freelancer, I have positively impacted companies across
                                various sectors by creating websites and applications that
                                strengthen their digital presence.
                            </p>

                            <Button/>

                        </div>

                    </div>

                    <div className="w-1/2">

                        <div className="relative flex justify-center items-center">
                            <img 
                                className="absolute"
                                src="assets/other/blob-bg.svg" 
                                alt=""
                            >
                            </img>
                            <Lottie 
                                animationData={animationData}
                                className="w-full max-w-96"
                            />
                        </div>

                    </div>

                </div>

            </SectionContent>

        </section>

    );

};