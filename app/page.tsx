import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import BusinessValue from "@/components/BusinessValue";
import Portfolio from "@/components/Portfolio";
import CustomizeStack from "@/components/CustomizeStack";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <BusinessValue />
      <Portfolio />
      <CustomizeStack />
      <Testimonials />
      <BlogSection />
      <CTA />
      <Footer />
    </>
  );
}
