import Navbar from "../../components/navigation/Navbar";
import Hero from "../../components/sections/Hero";
import Stats from "../../components/sections/Stats";
import Services from "../../components/sections/Services";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import Process from "../../components/sections/Process";
import Testimonials from "../../components/sections/Testimonials";
import Blog from "../../components/sections/Blog";
import Footer from "../../components/sections/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}