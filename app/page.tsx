import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OnlineConsultation from "@/components/OnlineConsultation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <OnlineConsultation />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingSocial />
    </>
  );
}
