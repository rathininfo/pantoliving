import React from 'react';

const WhyChoose = () => {
  const items = [
    {
      title: "Luxury Facilities",
      description:
        "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
      link: "#",
    },
    {
      title: "Affordable Price",
      description:
        "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
      link: "#",
    },
    {
      title: "Many Choices",
      description:
        "We provide many unique workspace choices so that you can choose the workspace to your liking.",
      link: "#",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Why <br className="hidden sm:block" /> Choosing Us
          </h2>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-lg hover:bg-orange-50 transition-colors duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                {item.description}
              </p>
              <a
                href={item.link}
                className="flex items-center gap-1 sm:gap-2 text-orange-500 font-medium hover:underline"
              >
                More Info <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
