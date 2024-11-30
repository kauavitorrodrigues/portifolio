import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollButton } from "@/components/site/ScrollButton";
import { Home } from "@/components/site/sections/Home";
import { About } from "@/components/site/sections/About";
import { Services } from "@/components/site/sections/Services";
import { Works } from "@/components/site/sections/Works";
import { Separator } from "@/components/ui/separator";

const Page = () => {

    return (

        <div className="min-h-screen w-full flex flex-col">

            <Header/>

            <ScrollButton/>

            <main className="flex flex-col gap-3flex-grow w-full justify-center bg-radial-pattern">

                <Home/>

                <Separator/>

                <About/>

                <Separator/>

                <Services/>
                
                <Separator/>

                <Works/>

            </main>

            <Footer/>

        </div>

    );
    
};

export default Page;