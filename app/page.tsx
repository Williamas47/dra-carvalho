import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OnlineConsultation from "@/components/OnlineConsultation";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OnlineConsultation />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingSocial />
    </>
  );
}
