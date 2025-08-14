import { FiSearch } from "react-icons/fi";
import bannerImage from "../../assets/banner.png";
import Tooltipbutto from "../../components/Tooltipbutto";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="h-screen relative bg-cover bg-center text-white bg-no-repeat"
    >
      <div className="pt-24 md:pt-40 text-center space-y-6 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug mx-auto max-w-2xl">
          Make your interior more minimalistic & modern
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl font-thin mx-auto max-w-lg text-white">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
      </div>

      {/* Search bar */}
      <div className="mt-8 sm:mt-10 flex justify-center px-4">
        <div className="flex items-center w-full max-w-sm sm:max-w-md rounded-full border border-white bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2">
          <input
            type="text"
            placeholder="Search furniture"
            className="flex-grow bg-transparent outline-none text-white placeholder-white text-sm sm:text-base"
          />
          <button className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-orange-500 rounded-full hover:bg-orange-600 transition-colors duration-200">
            <FiSearch className="text-white text-lg" />
          </button>
        </div>
      </div>

      
        {/* buttom blur effect */}
<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>

     

     {/* Tooltipbutto box */}

     <div className="absolute">
      <Tooltipbutto></Tooltipbutto>
     </div>



    </section>
  );
};

export default Hero;
