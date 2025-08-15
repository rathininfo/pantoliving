import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

const BestSellingProducts = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [productData, setProductData] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  // Fetch products
  useEffect(() => {
    fetch("/Product.json")
      .then((res) => res.json())
      .then((data) => setProductData(data))
      .catch((err) => console.error(err));
  }, []);

  const categories = [...new Set(productData.map((p) => p.category))];
  const filteredProducts = activeCategory
    ? productData.filter((p) => p.category === activeCategory)
    : productData;

  const scrollLeft = () => {
    const container = document.getElementById("product-container");
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.getElementById("product-container");
    container.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Best Selling Products
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-gray-200 border-transparent"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards with scroll */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
          >
            <FaArrowLeft />
          </button>

          <div
            id="product-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 sm:px-0 scroll-smooth"
          >
            {filteredProducts.map((product, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 sm:w-56 md:w-64 lg:w-72 bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col items-center p-4"
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

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
          >
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
