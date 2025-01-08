import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductCarousel = () => {
    const { product, error, loading } = useContext(ProductContext);

    if (loading) {
        return <p className="mt-12">loading...</p>
    }
    if (error) {
        return <p> error : {error}</p>
    }

    return (
        <div className="bg-gray-100 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="px-4"
            >
                {product.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56 object-cover rounded-md mb-4"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default ProductCarousel;
