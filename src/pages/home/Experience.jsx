
import { FaArrowRight } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="max-w-screen-2xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-center gap-8 md:gap-16 px-4 md:px-8 lg:px-16 text-black py-12">
      
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left leading-7 md:leading-10">
        <h6 className="text-orange-500 font-semibold">EXPERIENCE</h6>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl max-w-full md:max-w-[500px] my-4">
          We provide you the best experience
        </h2>
        <p className="max-w-full md:max-w-[460px] mb-4 text-gray-700">
          You don’t have to worry about the result because all of these interiors are made by 
          people who are professionals in their fields with an elegant and luxurious style
          and with premium quality materials.
        </p>

        {/* View All */}
        <div className="mt-6">
          <a
            href="#"
            className="text-orange-500 font-medium inline-flex items-center gap-2 hover:underline"
          >
            View All <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img 
          src="/src/assets/experience.png" 
          alt="Experience" 
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
      
    </section>
  );
};

export default Experience;
