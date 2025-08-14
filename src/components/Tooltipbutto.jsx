import React from "react";

const TooltipIcon = ({ size = "w-6 h-6", dotSize = "w-2 h-2", position }) => (
  <div className={`absolute ${position} flex flex-col items-center justify-center`}>
    <div className="group relative flex flex-col items-center">
      {/* Tooltip */}
      <div className="absolute bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg">
        <div className="w-5 h-5 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
        <div className="w-5 h-5 rounded-full border-2 border-white bg-cyan-400"></div>
        <div className="w-5 h-5 rounded-full border-2 border-white bg-gray-400"></div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/10 backdrop-blur-md rotate-45 border-b border-r border-white/20"></div>
      </div>

      {/* Main Button */}
      <div className={`mt-4 ${size} rounded-full bg-white/20 shadow-lg cursor-pointer flex justify-center items-center`}>
        <div className={`${dotSize} bg-white rounded-full`}></div>
      </div>
    </div>
  </div>
);

const Tooltipbutto = () => {
  const buttons = [
    { position: "left-36 top-[190px]", size: "w-6 h-6", dotSize: "w-2 h-2" },
    { position: "left-96 top-[150px]", size: "w-12 h-12", dotSize: "w-4 h-4" },
    { position: "left-[1070px] top-[250px]", size: "w-8 h-8", dotSize: "w-2 h-2" },
     { position: "left-[1770px] top-[270px]", size: "w-8 h-8", dotSize: "w-2 h-2" },
  ];

  return (
    <div>
      {buttons.map((btn, idx) => (
        <TooltipIcon key={idx} {...btn} />
      ))}
    </div>
  );
};

export default Tooltipbutto;
