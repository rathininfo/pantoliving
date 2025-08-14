import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

const BestSellingProducts = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [productData, setProductData] = useState([]);

  // Fetch products
  useEffect(() => {
    fetch("/Product.json")
      .then((res) => res.json())
      .then((data) => setProductData(data))
      .catch((err) => console.error(err));
  }, []);

  // Unique categories
  const categories = [...new Set(productData.map((p) => p.category))];

  // Filter products by active category
  const filteredProducts = activeCategory
    ? productData.filter((p) => p.category === activeCategory)
    : productData;

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Best Selling Products
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border ${
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
