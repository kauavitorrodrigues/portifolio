"use client"

import { SectionBody } from "../SectionBody";
import { ServiceCard, Services as ServiceList } from "../ServiceCard";

export const Services = () => {

    return (

        <section id="services" className="p-20 bg-card flex flex-col gap-10 justify-center items-center">

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

        </section>  

    );

};