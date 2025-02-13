// LandingPage.tsx
import React from 'react';
import NavigationBar from './NavigationBar.tsx';
import HeroSection from './HeroSection.tsx';
import FeaturedDevelopment from "./FeaturedDevelopment.tsx";
import LatestNews from "./LatestNews.tsx";
import Footer from "./Footer.tsx";
import AboutUs from "./AboutUs.tsx";

const LandingPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            <NavigationBar />
            <HeroSection
                title="YOUR DREAM HOME IS"
                subtitle="WAITING TO BE DISCOVERED"
                buttonText="DISCOVER DEVELOPMENTS"
            />
            <FeaturedDevelopment />
            <LatestNews/>
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default LandingPage;