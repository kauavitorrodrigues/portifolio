import { ReactNode } from "react";

type Props = {
    headline: string;
    subHeadline: string;
    description: string;
    children?: ReactNode;
};

export const SectionBody = ({ description, headline, subHeadline, children } : Props ) => {

    return (

        <>
            <div className="flex flex-col items-center max-w-xl text-center">
                <p className="text-primary font-semibold text-lg">{headline}</p>
                <h2 className="font-semibold text-4xl pb-3">
                    {subHeadline}
                </h2>
                <p>{description}</p>
            </div>

            { children &&
            
                <div className="flex justify-between gap-10 max-w-7xl">
                    { children }
                </div>

            }

        </>

    );


};