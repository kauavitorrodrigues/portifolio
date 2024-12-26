"use client"

import { SectionContent } from "@/components/SectionContent";
import { Projects } from "../Projects";
import { SectionBody } from "../SectionBody";

export const Works = () => {

    return (

        <section id="works" className="p-20 flex flex-col gap-10 justify-center items-center bg-radial-pattern">

            <SectionContent>

                <div className="w-full flex flex-col justify-center items-center gap-10">

                    <SectionBody
                        headline="Featured Work"
                        subHeadline="Latest Projects"
                        description="Discover how I bring ideas to life through creativity and innovation. Here’s a collection of projects where I’ve turned concepts into impactful results."
                    >
                        <Projects/>

                    </SectionBody>

                </div>

            </SectionContent>

        </section>

    );

};