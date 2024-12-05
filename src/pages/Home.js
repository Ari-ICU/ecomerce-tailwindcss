import React from 'react'
import ProductSection from '../components/ProductSection';
import ProductCarousel from '../components/ProductCarousel';
import Service from '../components/Service';
import HeroSection from '../components/HeroSection';

export const Homepage = () => {
    return (
        <>
            <HeroSection />
            <ProductSection />
            <Service />
            <ProductCarousel />
        </>
    )
}

export default Homepage;