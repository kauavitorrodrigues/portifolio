"use client"

import { SectionContent } from "@/components/SectionContent";
import { SectionBody } from "../SectionBody";
import { ServiceCard, Services as ServiceList } from "../ServiceCard";

export const Services = () => {

    return (

        <section id="services">

            <div className="p-20 bg-card flex flex-col justify-center items-center">

                <SectionContent>

                    <div className="w-full flex flex-col justify-center items-center gap-10">

                        <SectionBody
                            headline="What I Offer?"
                            subHeadline="My Services"
                            description="I offer a range of tailored solutions designed to meet your unique needs and deliver impactful results."
                        >

                            { ServiceList.map((service, index) => (
                                <ServiceCard 
                                    key={index}
                                    title={service.title} 
                                    description={service.description}
                                    icon={service.icon}
                                />
                            ))}

                        </SectionBody>

                    </div>

                </SectionContent>

            </div>

        </section>  

    );

};