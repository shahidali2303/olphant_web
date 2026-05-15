import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AnnouncementBar from "./components/Announcement";
import FeaturesBar from "./components/FeaturesBar";
import CategoryGrid from "./components/CategoryGrid";
import DealOfTheWeek from "./components/DealOfTheWeek";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import FeaturedProducts from "./components/FeaturedProducts";
import NewCollections from "./components/NewCollections";
import SplitHero from "./components/SplitHero";
import DarkSupportSection from "./components/DarkSupportSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Announcement Bar: No sticky class, so it scrolls with the content */}
      <AnnouncementBar />

      {/* 2. Header: Sticky class here ensures it sticks once it hits the top */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main>
        <HeroSection />
        <FeaturesBar />
        <CategoryGrid />
        <FeaturedProducts />
        <ProductSection />
        <SplitHero />
        <NewCollections />
        <DealOfTheWeek />
        <DarkSupportSection />
        <Footer />

        {/* Spacer to test the scrolling behavior */}
        {/* <div className="h-[200vh] bg-linear-to-b from-transparent to-gray-100" /> */}
      </main>
    </div>
  );
}

export default App;
