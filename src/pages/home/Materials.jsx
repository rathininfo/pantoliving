import React from 'react';

const Materials = () => {
    return (
     <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text */}
        <div>
          <p className="uppercase text-orange-500 tracking-widest font-medium mb-4">
            Materials
          </p>
          <h2 className="text-4xl font-bold leading-snug mb-6">
            Very Serious <br /> Materials For Making <br /> Furniture
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Because panto was very serious about designing furniture for our environment,
            using a very expensive and famous capital but at a relatively low price
          </p>
          <a
            href="#"
            className="text-orange-500 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            More Info <span className="text-lg">→</span>
          </a>
        </div>

        {/* Right Grid Images */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column (2 images stacked) */}
          <div className="flex flex-col gap-6">
            <img
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=500&q=80"
              alt="Furniture 1"
              className="rounded-2xl shadow-md object-cover w-full h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80"
              alt="Furniture 2"
              className="rounded-2xl shadow-md object-cover w-full h-48"
            />
          </div>

          {/* Right Column (1 tall image) */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
              alt="Furniture 3"
              className="rounded-2xl shadow-md object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
    );
};

export default Materials;