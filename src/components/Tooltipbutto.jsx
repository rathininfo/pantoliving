import React from "react";

const TooltipIcon = ({ size = "w-6 h-6", dotSize = "w-2 h-2", position }) => (
  <div className={`absolute ${position} flex flex-col items-center justify-center`}>
    <div className="group relative flex flex-col items-center">
      {/* Tooltip */}
      <div className="absolute bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg">
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
    { position: "left-1/4 top-1/3", size: "w-6 h-6", dotSize: "w-2 h-2" },
    { position: "left-1/2 top-1/4", size: "w-12 h-12", dotSize: "w-4 h-4" },
    { position: "left-2/3 top-1/2", size: "w-8 h-8", dotSize: "w-2 h-2" },
    { position: "left-3/4 top-2/3", size: "w-8 h-8", dotSize: "w-2 h-2" },
  ];

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {buttons.map((btn, idx) => (
        <TooltipIcon key={idx} {...btn} />
      ))}
    </div>
  );
};

export default Tooltipbutto;
