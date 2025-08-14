import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

const BestSellingProducts = () => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [activeCategory, setActiveCategory] = useState();

  const products = [
    {
      category: "Chair",
      name: "Sakarias Armchair",
      price: 392,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wv0XGk_71-CNlW6u0ZK4sFGA4uEq9OswlQ&s",
      rating: 5,
    },
    {
      category: "Chair",
      name: "Baltsar Chair",
      price: 299,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2xxILwJmlsjBM-NU_h4-ipN5QybgFbrbBw&s",
      rating: 5,
    },
    {
      category: "Chair",
      name: "Anjay Chair",
      price: 519,
      image: "https://png.pngtree.com/png-clipart/20250104/original/pngtree-single-chair-png-image_18709827.png",
      rating: 5,
    },
    {
      category: "Chair",
      name: "Nyantuy Chair",
      price: 921,
      image: "https://pngimg.com/uploads/chair/chair_PNG6886.png",
      rating: 5,
    },

    ,
    {
      category: "Beds",
      name: "Baltsar Chair",
      price: 299,
      image: "https://toppng.com/uploads/preview/bed-11530929583mpeb62ydef.png",
      rating: 5,
    },
    {
      category: "Beds",
      name: "Anjay Chair",
      price: 519,
      image: "https://atlas-content-cdn.pixelsquid.com/stock-images/bed-queen-4G4ZyD0-600.jpg",
      rating: 5,
    },
    {
      category: "Beds",
      name: "Nyantuy Chair",
      price: 921,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJLPbc5Op-pIjS0PiLgxGoy8MPvD2GnNGzA&s",
      rating: 5,
    },

    ,
    {
      category: "Sofa",
      name: "Baltsar Chair",
      price: 299,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-06/sdc-378-perspectivergbcolor.jpg",
      rating: 5,
    },
    {
      category: "Sofa",
      name: "Anjay Chair",
      price: 519,
      image: "https://hatil-image.s3.ap-southeast-1.amazonaws.com/Nop_Image/Retreat-101(1%2B2%2B2).png",
      rating: 5,
    },
    {
      category: "Lamp",
      name: "Nyantuy Chair",
      price: 921,
      image: "https://static-01.daraz.com.bd/p/648c0aa50641b97eb7ae5df2a96528fa.jpg",
      rating: 5,
    },
  ];

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory
  );

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Best Selling Product
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? "bg-gray-200 border-transparent"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="relative flex items-center">
          {/* Left arrow */}
          <button className="absolute -left-8 bg-white shadow-md p-3 rounded-full">
            <FaArrowLeft />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {filteredProducts.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col items-center p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 object-contain mb-4"
                />
                <div className="text-left w-full">
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <h3 className="font-bold">{product.name}</h3>
                  {/* Rating */}
                  <div className="flex text-orange-400 text-sm mb-2">
                    {"★".repeat(product.rating)}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">${product.price}</p>
                    <button className="bg-blue-900 text-white p-2 rounded-full">
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button className="absolute -right-8 bg-white shadow-md p-3 rounded-full">
            <FaArrowRight />
          </button>
        </div>

        {/* View All */}
        <div className="mt-8">
          <a
            href="#"
            className="text-orange-500 font-medium inline-flex items-center gap-2 hover:underline"
          >
            View All <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
