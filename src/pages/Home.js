import React from 'react'
import ProductSection from '../components/ProductSection';
import ProductCarousel from '../components/ProductCarousel';
import Service from '../components/Service';
import HeroSection from '../components/HeroSection';

export const Homepage = () => {
    return (
        <> <div className="container mx-auto px-4 mt-12">
            <HeroSection />
        </div>


            <ProductSection />
            <Service />
            <ProductCarousel />
        </>
    )
}

export default Homepage;