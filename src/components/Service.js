import React from 'react';

const Service = () => {
    return (
        <div className="bg-gray-100 py-24">
            <section className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="service bg-white p-6 shadow-md rounded-lg text-center">
                        <i className="ri-macbook-line text-4xl text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700">Web Design</h3>
                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="service bg-white p-6 shadow-md rounded-lg text-center">
                        <i className="ri-database-2-line text-4xl text-red-500 mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700">Data Analysis</h3>
                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="service bg-white p-6 shadow-md rounded-lg text-center">
                        <i className="ri-palette-line text-4xl text-yellow-500 mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700">Graphic Design</h3>
                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="service bg-white p-6 shadow-md rounded-lg text-center">
                        <i className="ri-android-line text-4xl text-indigo-500 mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700">App Development</h3>
                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="service bg-white p-6 shadow-md rounded-lg text-center">
                        <i className="ri-hand-coin-line text-4xl text-teal-500 mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700">Business Management</h3>
                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Service;
