import {FiSearch} from "react-icons/fi";
import bannerImage from "../../assets/banner.png";
import Tooltipbutto from "../../components/Tooltipbutto";

const Hero = () => {
    return (
        <section
            style={{backgroundImage: `url(${bannerImage})`}}
            className="min-h-screen relative bg-cover bg-center text-white bg-no-repeat"
        >
        
             
            <div className="md:pt-48 pt-24 text-center space-y-8  px-2">
                <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug mx-auto md:w-1/2">
                    Make your interior more minimalistic & modern
                </h1>
                <p className="text-2xl font-thin mx-auto md:w-1/3 text-white">
                    Turn your room with panto into a lot more minimalist and modern with ease and speed
                </p>
            </div>

       <div className="mt-10 flex justify-center">
  <div className="flex items-center w-full max-w-md rounded-full border border-white bg-white/10 backdrop-blur-md px-4 py-2">
    <input
      type="text"
      placeholder="Search furniture"
      className="flex-grow bg-transparent outline-none text-white placeholder-white"
    />
    <button className="w-9 h-9 flex items-center justify-center bg-orange-500 rounded-full hover:bg-orange-600 transition-colors duration-200">
      <FiSearch className="text-white text-lg" />
    </button>
  </div>
</div>

<div className="hidden lg:block md:hidden">
   <Tooltipbutto></Tooltipbutto>
</div>

        </section>
    );
};

export default Hero;
