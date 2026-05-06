import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import FeaturesStrip from "@/components/sections/FeaturesStrip";
import ProductsGrid from "@/components/sections/ProductsGrid";
import ServicesSection from "@/components/sections/ServicesSection";
import AppSection from "@/components/sections/AppSection";
import OffersSection from "@/components/sections/OffersSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <StatsBar /> */}
        <FeaturesStrip />
        {/* <ProductsGrid /> */}
        {/* <ServicesSection /> */}
        <AppSection />
        <OffersSection />
      </main>
      <Footer />
    </>
  );
}
