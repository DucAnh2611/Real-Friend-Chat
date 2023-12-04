import Feature from "@/components/Feature";
import Header from "@/components/Header";

export const metadata = {  
    title: "Dashboard - Friendly Chat",
    description: "App chat for friend"
};

export default function LandingPage() {
    return (
        <section>
            <Header/>
            <Feature/>
        </section>
    )
}